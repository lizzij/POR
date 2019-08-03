#encoding: utf-8

import csv
from wxpy import *
from datetime import datetime, timedelta
import time
import schedule
import pandas as pd
import requests
import random
from bs4 import BeautifulSoup
from io import StringIO
from hashids import Hashids
import numpy as np
from math import floor
from random import choice, randint

# Get date
now = datetime.now() + timedelta(hours = 4) # Convert to GMT

# Test? (YES / NO)
# test = input("\nAre you testing (YES / NO) ?\n")
test = "NO"

# Which cohort?
cohort = "3"

# Message content
date_range=u'2019年8月19-25日'

# Canned WeChat scripts
day1_wechat_prompt = u'我们将为您提供一些西安本地及周边的户外活动及场所的信息。我们也将会询问您一些关于各类话题的问题。 \
您的回答仅被用于学术研究，我们将对您的个人信息及回答进行严格保密。 \
此次调研总共持续2天时间。如果您想参加这项学术调研，请点击以下链接开始'
day2_wechat_prompt = u'下面是一项我们计划为慈善事业举办的活动，请您仔细思考是否有意向参加该活动。\
此项活动将于' + date_range + '举行（我们从其他来源获得有关的天气信息，这些来源对信息的准确性负责）。'
reminder = u'您没有完成昨天的调查。我们理解您可能有别的事在忙。 我们将再给您更多的时间来完成的调研。这里是链接！'

# Get current list of activities, as pandas dataframe
def get_activities():
    page = requests.get("https://dailyeventinfo.com/allActivities").text
    soup = BeautifulSoup(page, "html.parser")
    divList = soup.findAll('div', attrs={"class" : "list"})
    data=','.join(['user_id','day','day_complete','survey_page','day_started','curr_time'])
    for div in divList:
        data = data + '\n' + ' '.join(div.text.split())
    csv_data = StringIO(data)
    df = pd.read_csv(csv_data)
    df = df[pd.notnull(df['user_id'])]
    df['user_id']=df['user_id'].astype(int)
    return df

def get_results():
    page = requests.get("https://dailyeventinfo.com/allResults").text
    soup = BeautifulSoup(page, "html.parser")
    divList = soup.findAll('div', attrs={"class" : "about"})
    data=','.join(['user_id', 'day', 'question_id', 'result', 'created'])
    for div in divList:
        data = data + '\n' + ' '.join(div.text.split())
    csv_data = StringIO(data)
    df = pd.read_csv(csv_data)
    df = df[pd.notnull(df['user_id'])]
    df['user_id']=df['user_id'].astype(int)
    return df

def get_users():
    page = requests.get("https://dailyeventinfo.com/allUsers").text
    soup = BeautifulSoup(page, "html.parser")
    divList = soup.findAll('div', attrs={"class" : "list"})
    data=','.join(['user_id','day','wechat_id','cohort','treatment','user_id_hashid','day_hashid'])
    for div in divList:
        data = data + '\n' + ' '.join(div.text.split())
    csv_data = StringIO(data)
    df = pd.read_csv(csv_data)
    df = df[pd.notnull(df['user_id'])]
    return df

def random_treatment():
    users = get_users()
    curr_treatment_count = users['treatment'].value_counts()/2
    curr_cohort_user_count = int(len(users.loc[users.cohort == int(cohort)])/2)
    if curr_cohort_user_count > 41:
        treat_id = ['TNO', 'TNN', 'TRO', 'TRN']
        treat_prob = [0.25, 0.25, 0.25, 0.25]
        treatment = choices(treat_id, treat_prob)[0]
        return treatment
    else:
        treatment_goal = {'TNO':10, 'TNN':10, 'TRO':10, 'TRN':11} # including test user TRN
        treatment_choices_left = []
        for treatment in treatment_goal.keys():
            if treatment_goal[treatment] > curr_treatment_count[treatment]:
                treatment_choices_left.append(treatment)
                print(treatment_choices_left)
        treatment = random.choice(treatment_choices_left)
        return treatment

# initialize chatbot
bot = Bot()
bot.enable_puid('wxpy_puid.pkl')


##############################################################################################
# auto accept friend request
@bot.register(msg_types=FRIENDS)
def auto_accept_friends(msg):

    ## Accept request
    new_friend = msg.card.accept()
    previousMax = get_activities()['user_id'].dropna().max()
    if previousMax == 33333337530699:
        previousMax = previousMax - 33333330000000
    if previousMax > 3*1e6:
        previousMax = previousMax - 3*1e6
    nextUserID = int((floor(previousMax/1e6)+1)*1e6+randint(1,999999)) # Next user's ID

    ## Deal with too many users in a cohort
    users = get_users()
    cohortCount = int(len(users.loc[users.cohort == int(cohort)])/2)
    if cohortCount > 51:
        new_friend.send(u"次轮招募已完成，我们将在下轮开始时尽快联系您！")
        new_friend.set_remark_name("WL_"+str(nextUserID))
    else:
        ## Get wxid (assuming that this is the unique ID we can use)
        userName = new_friend.user_name[1:]

    # Create hashes for the new user, save in user db, create new activity
    treatment = random_treatment()

    # Add cohort name to remark name to use for reminder messages
    nextUserID = int(cohort + str(nextUserID))
    print("adding new user", nextUserID, "assigning treatment", treatment, "...")
    for day in range(1, 3):
        user_id_hashids = Hashids(salt=str(10 * nextUserID + day) + "user_id", min_length=16)
        day_hashids = Hashids(salt=str(10 * nextUserID + day) + "day", min_length=10)
        hashed_user_id = user_id_hashids.encrypt(nextUserID)
        hashed_day = day_hashids.encrypt(day)
        requests.post("https://dailyeventinfo.com/userInsert/"+str(nextUserID)+"/"+
            str(day)+"/"+str(userName)+"/"+ str(cohort) + "/" + str(treatment) +"/"+hashed_user_id+"/"+hashed_day)
    requests.post("https://dailyeventinfo.com/activityUpdate/"+str(nextUserID)+"/1/0/0/0/0")

    day = 1
    user_id_hashids = Hashids(salt=str(10 * nextUserID + day) + "user_id", min_length=16)
    day_hashids = Hashids(salt=str(10 * nextUserID + day) + "day", min_length=10)
    hashed_user_id = user_id_hashids.encrypt(nextUserID)
    hashed_day = day_hashids.encrypt(day)
    day1_url = "https://dailyeventinfo.com/xian/" + hashed_user_id.strip() + "/" + hashed_day.strip() + "/info"
    new_friend.send(day1_wechat_prompt)
    new_friend.send(day1_url)

    # Set remark_name to use for reminder messages
    new_friend.set_remark_name(str(nextUserID))
##############################################################################################

##############################################################################################
# send urls
def six_pm():
    print("\n\n========== Sending 6pm reminders or urls ===========")

    # Prep
    activities = get_activities()
    users = get_users()

    # Next day reminder prep ===================================================
    sorted_acts_r = activities.loc[activities['day_complete'] == 0]

    if test == "YES":
        sorted_acts_r = sorted_acts_r.loc[sorted_acts_r['user_id'] == 1882385] # Turn this off for test with Zixin
    else:
        sorted_acts_r = sorted_acts_r.loc[sorted_acts_r['user_id'] >= 1882385] # Turn this on For test with Zixin

    send_list_r = pd.merge(sorted_acts_r, users, on=['user_id','day'])
    send_list_r['url'] = "https://dailyeventinfo.com/xian/" + send_list_r['user_id_hashid'].str.strip() + "/" + send_list_r['day_hashid'].str.strip() + "/info"
    print("" if send_list_r.empty else "\n------------------------------ Sending 6PM next-day reminders ------------------------------")
    print("" if send_list_r.empty else send_list_r)

    # Send reminder
    for i in range(send_list_r.shape[0]):
        wechat_id = send_list_r.iloc[i]['user_id']
        try:
            my_friend = bot.friends().search(remark_name=str(wechat_id))[0]
            print('sending 6PM reminder message to',wechat_id,'...')
            my_friend.send(reminder)
            my_friend.send(send_list_r['url'].iloc[i])
            time.sleep(2)
        except IndexError:
            print('cannot find user',wechat_id,'...')

    # New day URL prep =========================================================
    sorted_acts_n = activities.loc[activities['day_complete'] == 1]
    sorted_acts_n = activities.loc[activities['day'] == 1]
    sorted_acts_n['day'] = sorted_acts_n['day'] + 1

    send_list_n = pd.merge(sorted_acts_n, users, on=['user_id','day'])
    send_list_n['url'] = "https://dailyeventinfo.com/xian/" + send_list_n['user_id_hashid'].str.strip() + "/" + send_list_n['day_hashid'].str.strip() + "/info"
    print("" if send_list_n.empty else send_list_n)

    # Send new day URL, update activity
    for i in range(send_list_n.shape[0]):
        wechat_id = send_list_n.iloc[i]['user_id']
        try:
            my_friend = bot.friends().search(remark_name=str(wechat_id))[0]
            print('sending prompt and url to',wechat_id,'...')
            my_friend.send(day2_wechat_prompt)
            my_friend.send(send_list_n.iloc[i]['url'])
            time.sleep(2)
            #Update activity for new day URL
            requests.post("https://dailyeventinfo.com/activityUpdate/"+str(int(send_list_n['user_id'].iloc[i]))+"/"+str(int(send_list_n['day'].iloc[i]))+"/0/0/0/0")
        except IndexError:
            print('cannot find user',wechat_id,'...')
##############################################################################################

##############################################################################################
def ten_pm():
    print("\n\n========== Sending 10pm reminders ===========")

    # Prep
    activities = get_activities()
    users = get_users()

    # Same day reminder prep ===================================================
    sorted_acts_r = activities.loc[activities['day_complete'] == 0]

    send_list_r = pd.merge(sorted_acts_r, users, on=['user_id','day'])
    send_list_r['url'] = "https://dailyeventinfo.com/xian/" + send_list_r['user_id_hashid'].str.strip() + "/" + send_list_r['day_hashid'].str.strip() + "/info"
    print("" if send_list_r.empty else "\n------------------------------ Sending 6PM next-day reminders ------------------------------")
    print("" if send_list_r.empty else send_list_r)

    # Send new day URL, update activity
    for i in range(send_list_r.shape[0]):
        wechat_id = send_list_r.iloc[i]['user_id']
        try:
            my_friend = bot.friends().search(remark_name=str(wechat_id))[0]
            print('sending 6PM reminder message to',wechat_id,'...')
            my_friend.send(reminder)
            my_friend.send(send_list_r['url'].iloc[i])
            time.sleep(2)
        except IndexError:
            print('cannot find user',wechat_id,'...')

##############################################################################################

##############################################################################################
# SCHEDULE

# computer time EST   06:00 AM   10:00 AM
# user time GMT+8     18:00 PM   22:00 PM
# host time GMT       10:00 PM   14:00 PM

schedule.every().day.at("07:00").do(six_pm)
schedule.every().day.at("10:00").do(ten_pm)

while True:
    schedule.run_pending()
    time.sleep(60) # wait one minute

##############################################################################################
# Keep logged in
embed()

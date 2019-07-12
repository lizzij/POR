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
from random import choice

# Get date
now = datetime.now() + timedelta(hours = 4) # Convert to GMT

# Test? (YES / NO)
test = input("\nAre you testing (YES / NO) ?\n")

# Which cohort?
cohort = "3"

# Message content
date_range=u'2019年8月5-11日'

# Canned WeChat scripts
day1_wechat_prompt = u'我们将为您提供一些西安本地及周边的户外活动及场所的信息。我们也将会询问您一些关于各类话题的问题。 \
您的回答仅被用于学术研究，我们将对您的个人信息及回答进行严格保密。 \
此次调研总共持续2天时间。如果您想参加这项学术调研，请点击以下链接开始'
day2_wechat_prompt = u'下面是一项我们计划为慈善事业举办的活动，请您仔细思考是否有意向参加该活动。\
此项活动将于' + date_range + '举行（我们从其他来源获得有关的天气信息，这些来源对信息的准确性负责）。'
reminder = u'您没有完成昨天的调查。我们理解您可能有别的事在忙。 我们将再给您一整天的时间来完成昨天的调研。这里是链接！'
URLmessage = [u'',u'']
URLmessage.append(day1_wechat_prompt)
URLmessage.append(day2_wechat_prompt)

# Assign treament group, 10 people each
treatment_dict = {'TNO':10, 'TNN':10, 'TRO':10, 'TRN':10}
def random_treatment():
    treatment, num_left = random.choice(list(treatment_dict.items()))
    num_left = num_left - 1
    treatment_dict.update( {treatment : num_left})
    if num_left == 0:
        del treatment_dict[treatment]
    return treatment

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

# initialize chatbot
bot = Bot()
bot.enable_puid('wxpy_puid.pkl')


##############################################################################################
# auto accept friend request
@bot.register(msg_types=FRIENDS)
def auto_accept_friends(msg):

    ## Accept request
    new_friend = msg.card.accept()
    nextUserID = int((floor(get_activities()['user_id'].dropna().max()/1e6)+1)*1e6+randint(1,999999)) # Next user's ID

    # Check whether existing user
    # TODO need to test this function out and incorporate into line 117 funtion next UserID
    users = get_users()
    while (users[user['user_id'].contains(nextUserID + '')]):
        nextUserID = nextUserID + randint(1,999999)
    print(nextUserID)

    ## Deal with too many users in a cohort
    cohortCount = int(len(users.loc[users.cohort == cohort])/9)
    if cohortCount > 40:
        new_friend.send(u"次轮招募已完成，我们将在下轮开始时尽快联系您！")
        new_friend.set_remark_name("WL_"+str(nextUserID))
    else:
        ## Get wxid (assuming that this is the unique ID we can use)
        userName = new_friend.user_name[1:]

    # Create hashes for the new user, save in user db, create new activity
    nextUserID = int((floor(get_activities()['user_id'].dropna().max()/1e6)+1)*1e6+randint(1,999999)) # Next user's ID
    treatment = random_treatment()

    # Add cohort name to remark name to use for reminder messages
    nextUserID = int(cohort + str(nextUserID))
    print("adding new user", nextUserID, "assigning treatment", treatment, "...")
    for day in range(1):
        user_id_hashids = Hashids(salt=str(10 * nextUserID + day) + "user_id", min_length=16)
        day_hashids = Hashids(salt=str(10 * nextUserID + day) + "day", min_length=10)
        hashed_user_id = user_id_hashids.encrypt(nextUserID)
        hashed_day = day_hashids.encrypt(day)
        requests.post("https://dailyeventinfo.com/userInsert/"+str(nextUserID)+"/"+
            str(day)+"/"+str(userName)+"/"+ str(cohort) + "/" + str(treatment) +"/"+hashed_user_id+"/"+hashed_day)
    requests.post("https://dailyeventinfo.com/activityUpdate/"+str(nextUserID)+"/0/0/0/0/0")

    # Set remark_name to use for reminder messages
    new_friend.set_remark_name(nextUserID)
##############################################################################################

##############################################################################################
# send urls
def send_urls:
    print("\n\n========== Sending day prompts and urls ===========")

    # Prep
    activities = get_activities()
    users = get_users()

    # New day URL prep
    sorted_acts_n = activities.loc[activities['day_complete'] == 1]

    # only send to Eliza if test
    if test == "YES":
        sorted_acts_n = sorted_acts_n.loc[sorted_acts_n['user_id'] == 1882385] # Turn this on for test with Eliza's ID
    else:
        sorted_acts_n = sorted_acts_n.loc[sorted_acts_n['user_id'] >= 1882385] # Turn this off for test with Eliza's ID

    # Send new day URL, update activity
    for i in range(send_list_n.shape[0]):
        wechat_id = send_list_n.iloc[i]['user_id']
        try:
            my_friend = bot.friends().search(remark_name=str(wechat_id))[0]
            print('sending day1 prompt and url to',wechat_id,'...')
            my_friend.send(URLmessage[send_list_n.iloc[i]['day']])
            my_friend.send(send_list_n.iloc[i]['url'])
            time.sleep(2)
            #Update activity for new day URL
            requests.post("https://dailyeventinfo.com/activityUpdate/"+str(int(send_list_n['user_id'].iloc[i]))+"/"+str(int(send_list_n['day'].iloc[i]))+"/0/0/0/0")
        except IndexError:
            print('cannot find user',wechat_id,'...')
##############################################################################################

##############################################################################################
def send_reminders:
    print("\n\n========== Sending reminders and urls ===========")

    # Prep
    activities = get_activities()
    users = get_users()

    # New day URL prep
    sorted_acts_n = activities.loc[activities['day_complete'] == 0]

    # only send to Eliza if test
    if test == "YES":
        sorted_acts_n = sorted_acts_n.loc[sorted_acts_n['user_id'] == 1882385] # Turn this on for test with Eliza's ID
    else:
        sorted_acts_n = sorted_acts_n.loc[sorted_acts_n['user_id'] >= 1882385] # Turn this off for test with Eliza's ID

    # Send new day URL, update activity
    for i in range(send_list_n.shape[0]):
        wechat_id = send_list_n.iloc[i]['user_id']
        try:
            my_friend = bot.friends().search(remark_name=str(wechat_id))[0]
            print('sending day1 prompt and url to',wechat_id,'...')
            my_friend.send(reminder)
            my_friend.send(send_list_n.iloc[i]['url'])
            time.sleep(2)
            #Update activity for new day URL
            requests.post("https://dailyeventinfo.com/activityUpdate/"+str(int(send_list_n['user_id'].iloc[i]))+"/"+str(int(send_list_n['day'].iloc[i]))+"/0/0/0/0")
        except IndexError:
            print('cannot find user',wechat_id,'...')

##############################################################################################

##############################################################################################
# SCHEDULE

# computer time EST   06:00 AM   10:00 AM
# user time GMT+8     18:00 PM   22:00 PM
# host time GMT       10:00 PM   14:00 PM

schedule.every().day.at("06:00").do(send_urls)
schedule.every().day.at("06:30").do(send_reminders)
schedule.every().day.at("10:00").do(send_reminders)

while True:
    schedule.run_pending()
    time.sleep(60) # wait one minute

##############################################################################################
# Keep logged in
embed()

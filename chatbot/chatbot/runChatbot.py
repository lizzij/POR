#encoding: utf-8

import csv
from wxpy import *
from datetime import datetime, timedelta
import time
import schedule
import pandas as pd
import requests
from bs4 import BeautifulSoup
from io import StringIO
from hashids import Hashids
import numpy as np
from math import floor
from random import randint, uniform

##############################################################################################
## Get date (do we need this?)
now = datetime.now() + timedelta(hours = 4) # Convert to GMT

## Test? (YES / NO)
test = input("Test (YES / NO) ? ")

## Which cohort?
cohort = input("\nWhich cohort (1 ... ∞) ? ")

treat_prob = [0.2, 0.4, 0.6, 0.8, 1]
## Note: Probability of being in each of the treatment groups (e.g., 0.2-0 = prob(T=1); 0.4-0.2 = prob(T=2))

## Message content

if cohort == 1:
date_range = u'2019年5月13-19日'
elif cohort == 2:
date_range = u'2019年6月3-9日'

intro = u'  此次调研总共维持8天时间。\
我们将在接下来的6天（包括今天）每天提供一些将在 '+ date_range +' 举办的户外活动信息，\
并询问一些简短的问题（约5分钟）。第7天和第8天的调研将在 2周和4周 后进行。\n\n\
  我们也将会询问您一些关于各类话题的问题。 如果您想参加这项学术调研，请点击以下链接开始。\
您的回答仅被用于学术研究，我们将对您的个人信息及回答进行严格保密。\
调研结束后我们将进行抽奖，所有参与并完成调研的同学将有机会赢得800元人民币作为奖励。\
这是一条自动消息。'
title = u'  请点击下面的链接。'
same_day_reminder = u'  看上去您还没有完成今天的调研。 请您点击链接，参与不到五分钟的调研。\
如果您在每天晚上12点前完成调研，您将有机会参与赢得800元人民币的抽奖，并收到来自哈佛大学研究员出具的参与证明。'
next_day_reminder = u'  您没有完成昨天的调查。我们理解您可能有别的事在忙。我们将再给您一整天的时间来完成昨天的调研。\
如您所知，只有在完成所有8天 的调研后，您才有机会参与赢得800元人民币的抽奖，并收到来自哈佛大学研究员的参与证明。这里是链接！'
reminder = u'  看上去您还没有完成今天的调研。 请您点击链接，参与不到五分钟的调研。'
URLmessage = [u'',u'']
URLmessage.append(u'  今天是调研第二天。 请点击下面的链接开始，同时了解另一个精彩的本地活动。 这是一条自动消息。')
URLmessage.append(u'  今天是调研第三天。 请点击下面的链接开始，同时了解另一个精彩的本地活动。 这是一条自动消息。')
URLmessage.append(u'  今天是调研第四天。 请点击下面的链接开始，同时了解另一个精彩的本地活动。 这是一条自动消息。')
URLmessage.append(u'  今天是调研第五天。 请点击下面的链接开始，同时了解另一个精彩的本地活动。 这是一条自动消息。')
URLmessage.append(u'  今天是调研第六天。 请点击下面的链接开始，同时了解另一个精彩的本地活动。 这是一条自动消息。')
URLmessage.append(u'  好久不见！今天是调研的第7天。我们就快要完成所有调研了！')
URLmessage.append(u'  今天是调研的最后一天。 如果您完成今天的简短问卷，您将有赢得800元人民币的机会。我们还将向您提供哈佛大学研究员出具的参与证明。')

## Get current list of activities, as pandas dataframe
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

def get_users():
    page = requests.get("https://dailyeventinfo.com/allUsers").text
    soup = BeautifulSoup(page, "html.parser")
    divList = soup.findAll('div', attrs={"class" : "list"})
    data=','.join(['user_id','day','wechat_id','treatment','user_id_hashid','day_hashid'])
    for div in divList:
        data = data + '\n' + ' '.join(div.text.split())
    csv_data = StringIO(data)
    df = pd.read_csv(csv_data)
    df = df[pd.notnull(df['user_id'])]
    df['user_id']=df['user_id'].astype(int)
    return df

## initialize chatbot
bot = Bot()
bot.enable_puid('wxpy_puid.pkl')
##############################################################################################

##############################################################################################
# auto accept friend request
@bot.register(msg_types=FRIENDS)
def auto_accept_friends(msg):
    ## Accept request
    new_friend = msg.card.accept()

    ## Get wxid (assuming that this is the unique ID we can use)
    userName = new_friend.user_name[1:]

    ## Check whether existing user (TO-DO)

    ## Create hashes for the new user, save in user db, create new activity
    nextUserID = int((floor(get_activities()['user_id'].dropna().max()/1e6)+1)*1e6+randint(1,999999)) # Next user's ID
    print("adding new user", nextUserID, "...")
    rn = uniform(0,1)
    treat = "T"+str(sum(i > rn for i in treat_prob))
    for day in range(9):
        user_id_hashids = Hashids(salt=str(10 * nextUserID + day) + "user_id", min_length=16)
        day_hashids = Hashids(salt=str(10 * nextUserID + day) + "day", min_length=10)
        hashed_user_id = user_id_hashids.encrypt(nextUserID)
        hashed_day = day_hashids.encrypt(day)
        requests.post("https://dailyeventinfo.com/userInsert/"+str(nextUserID)+"/"+
            str(day)+"/"+str(userName)+"/"+ str(cohort) + "/" + str(treatment) +"/"+hashed_user_id+"/"+hashed_day)
    requests.post("https://dailyeventinfo.com/activityUpdate/"+str(nextUserID)+"/0/0/0/0/0")

    ## Send intro message
    day = 0
    user_id_hashids = Hashids(salt=str(10 * nextUserID + day) + "user_id", min_length=16)
    day_hashids = Hashids(salt=str(10 * nextUserID + day) + "day", min_length=10)
    hashed_user_id = user_id_hashids.encrypt(nextUserID)
    hashed_day = day_hashids.encrypt(day)
    sendURL = "https://dailyeventinfo.com/" + hashed_user_id.strip() + "/" + hashed_day.strip() + "/info"
    new_friend.send(intro)
    new_friend.send(sendURL)

    ## Set remark_name to use for reminder messages
    new_friend.set_remark_name(str(nextUserID))
#############################################################################################

##############################################################################################
## 10PM SAME-DAY REMINDER
def tenPM():
    print("\n\n====================== Now it's 10PM! Sending 10PM same-day reminders ======================\n")

    ## Get list of (user_id, day) to send reminders
    activities = get_activities()
    # activities['day_started'] = pd.to_datetime(activities['day_started'], format="%Y-%m-%d %H:%M:%S.%f") ## Currently not using in the selection logic
    activities['curr_time'] = pd.to_datetime(activities['curr_time'], format="%Y-%m-%d %H:%M:%S.%f")
    activities['time_since_last_activity'] = (now - activities['curr_time']) / np.timedelta64(1, 'h')
    sorted_acts = activities.loc[activities['day_complete'] == 0]
    if test == "YES":
        sorted_acts = sorted_acts.loc[sorted_acts['user_id'] == 1882385] ## Turn this off for test with Eliza's ID
    else:
        sorted_acts = sorted_acts.loc[sorted_acts['user_id'] >= 1882385] ## Turn this on for test with Eliza's ID
        # Note: 104=Zixin, 105=Jie
    sorted_acts = sorted_acts.loc[sorted_acts['time_since_last_activity'] < 48].iloc[:,0:2]
    ## Search user list using (user_id, day), get wechat_id
    users = get_users()
    send_list = pd.merge(sorted_acts, users, on=['user_id','day'])
    send_list['url'] = "https://dailyeventinfo.com/" + send_list['user_id_hashid'].str.strip() + "/" + send_list['day_hashid'].str.strip() + "/info"
    print(send_list)
    # Send reminders
    for i in range(send_list.shape[0]):
        wechat_id = send_list.iloc[i]['user_id']
        my_friend = bot.friends().search(remark_name=str(wechat_id))[0]
        print('sending 10PM reminder message to',wechat_id,'...')
        my_friend.send(reminder)
        my_friend.send(send_list['url'].iloc[i])
        time.sleep(2)
##############################################################################################

##############################################################################################
## 6PM NEXT DAY URL + REMINDER IF NOT COMPLETED
def sixPM():
    print("\n\n========== Now it's 6PM! Sending 6PM next day urls + reminders if not completed: ===========")

    ## Prep
    activities = get_activities()
    # activities['day_started'] = pd.to_datetime(activities['day_started'], format="%Y-%m-%d %H:%M:%S.%f")
    activities['curr_time'] = pd.to_datetime(activities['curr_time'], format="%Y-%m-%d %H:%M:%S.%f")
    activities['time_since_last_activity'] = (now - activities['curr_time']) / np.timedelta64(1, 'h')
    users = get_users()

    ## New day URL prep
    sorted_acts_n = activities.loc[activities['day_complete'] == 1]

    # only send to Eliza if test
    if test == "YES":
        sorted_acts_n = sorted_acts_n.loc[sorted_acts_n['user_id'] == 1882385] ## Turn this on for test with Eliza's ID
    else:
        sorted_acts_n = sorted_acts_n.loc[sorted_acts_n['user_id'] >= 1882385] ## Turn this off for test with Eliza's ID

    # TODO 7, 8, completion messages; if Day > 6: do nothing
    sorted_acts_n['day'] = sorted_acts_n['day'] + 1
    sorted_acts_n = sorted_acts_n.loc[sorted_acts_n['day'] <= 6]
    send_list_n = pd.merge(sorted_acts_n, users, on=['user_id','day'])
    send_list_n['url'] = "https://dailyeventinfo.com/" + send_list_n['user_id_hashid'].str.strip() + "/" + send_list_n['day_hashid'].str.strip() + "/info"
    print("" if send_list_n.empty else send_list_n)

    ## Send new day URL, update activity
    for i in range(send_list_n.shape[0]):
        wechat_id = send_list_n.iloc[i]['user_id']
        my_friend = bot.friends().search(remark_name=str(wechat_id))[0]
        print('sending 6PM new day message to',wechat_id,'...')
        my_friend.send(URLmessage[send_list_n.iloc[i]['day']])
        my_friend.send(send_list_n.iloc[i]['url'])
        time.sleep(2)
        ##Update activity for new day URL
        requests.post("https://dailyeventinfo.com/activityUpdate/"+str(int(send_list_n['user_id'].iloc[i]))+"/"+str(int(send_list_n['day'].iloc[i]))+"/0/0/0/0")

    ## Next day reminder prep
    sorted_acts_r = activities.loc[activities['day_complete'] == 0]
    sorted_acts_r = sorted_acts_r.loc[sorted_acts_r['time_since_last_activity'] < 48].iloc[:,0:2]

    # only send to Eliza if test
    if test == "YES":
        sorted_acts_r = sorted_acts_r.loc[sorted_acts_r['user_id'] == 1882385] ## Turn this off for test with Zixin
    else:
        sorted_acts_r = sorted_acts_r.loc[sorted_acts_r['user_id'] >= 1882385] ## Turn this on For test with Zixin

    send_list_r = pd.merge(sorted_acts_r, users, on=['user_id','day'])
    send_list_r['url'] = "https://dailyeventinfo.com/" + send_list_r['user_id_hashid'].str.strip() + "/" + send_list_r['day_hashid'].str.strip() + "/info"
    print("" if send_list_r.empty else send_list_r)

    ## Send new day URL, update activity
    for i in range(send_list_r.shape[0]):
        wechat_id = send_list_r.iloc[i]['user_id']
        my_friend = bot.friends().search(remark_name=str(wechat_id))[0]
        print('sending 6PM reminder message to',wechat_id,'...')
        my_friend.send(next_day_reminder)
        my_friend.send(send_list_r['url'].iloc[i])
        time.sleep(2)
##############################################################################################

##############################################################################################
# SCHEDULE

# computer time EST   06:00 AM   10:00 AM
# user time GMT+8     18:00 PM   22:00 PM
# host time GMT       10:00 PM   14:00 PM

schedule.every().day.at("06:00").do(sixPM)
schedule.every().day.at("10:00").do(tenPM)

while True:
    schedule.run_pending()
    time.sleep(60) # wait one minute

##############################################################################################

## Keep logged in
embed()

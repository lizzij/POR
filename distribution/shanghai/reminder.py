###########################
## This file automatically creates csv files prepared for surveyors
## and sends the files to the surveyors
## so that they can simply copy and paste row by row
## This file only covers day 1 to 6.
###########################
## XXX: Check before deployment
## YYY: Need Eliza's input
## To-Do List (XXX)
#### Day 7 and Day 8
#### Divide file into num_surveyors: this depends on the surveyor's preference (6PM vs 10Pm? Half and half each time?)

from bs4 import BeautifulSoup
import requests
from io import StringIO
import pandas as pd
import numpy as np
import random
from math import floor
from random import randint
from hashids import Hashids
from datetime import datetime, timedelta
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
import schedule
import time
import sys

## Toggle test vs. deployment (XXX for deployment activate first line, de-activate the second line)
URL = "https://dailyeventinfo.com/"
# URL = "http://127.0.0.1:5000/"

## Scripts
msg_same_day_reminder = u'看上去您还没有完成今天的调研。 请您点击链接，参与不到五分钟的调研。'
msg_next_day_reminder = u'您没有完成昨天的调查。我们理解您可能有别的事在忙。我们将再给您一整天的时间来完成昨天的调研。 \n 如您所知，只有在完成所有8天 的调研后，您才有机会参与赢得800元人民币的抽奖，并收到来自哈佛大学研究员的参与证明。这里是调研链接！'
msg_new_survey = u'请点击下面的链接开始，同时了解另一个精彩的本地活动。'
msg = {'d'+'0'+'6PM':[msg_next_day_reminder,'IMPOSSIBLE SITUATION'],
    'd'+'0'+'10PM':[msg_same_day_reminder,'IMPOSSIBLE SITUATION'],
    'd'+'1'+'6PM':[msg_next_day_reminder,'IMPOSSIBLE SITUATION'],
    'd'+'1'+'10PM':[msg_same_day_reminder,'IMPOSSIBLE SITUATION'],
    'd'+'2'+'6PM':[msg_next_day_reminder,u'今天是调研第二天。 '+ msg_new_survey],
    'd'+'2'+'10PM':[msg_same_day_reminder,'No MESSAGE'],
    'd'+'3'+'6PM':[msg_next_day_reminder,u'今天是调研第三天。 '+ msg_new_survey],
    'd'+'3'+'10PM':[msg_same_day_reminder,'No MESSAGE'],
    'd'+'4'+'6PM':[msg_next_day_reminder,u'今天是调研第四天。 '+ msg_new_survey],
    'd'+'4'+'10PM':[msg_same_day_reminder,'No MESSAGE'],
    'd'+'5'+'6PM':[msg_next_day_reminder,u'今天是调研第五天。 '+ msg_new_survey],
    'd'+'5'+'10PM':[msg_same_day_reminder,'No MESSAGE'],
    'd'+'6'+'6PM':[msg_next_day_reminder,u'今天是调研第六天。 '+ msg_new_survey],
    'd'+'6'+'10PM':[msg_same_day_reminder,'No MESSAGE'],
}

## Parameters
cohort = "4"
page_columns_class = {'allActivities':[['user_id','day','day_complete','survey_page','day_started','curr_time'],'list'], 
    'allResults': [['user_id', 'day', 'question_id', 'result', 'created'],'about'],
    'allUsers': [['user_id','day','wechat_id','cohort','treatment','user_id_hashid','day_hashid'],'list']}
sender_address = 'porshanghai@gmail.com'
sender_pass = 'PORporsh'
backup_dir = 'C:/Projects/SurveyorHelpBot/msg_backup/'

# Get current list of activities, users, or survey results as Pandas dataframe
def get_page_as_df(pageName, columns_class):
    page = requests.get(URL + pageName).text
    soup = BeautifulSoup(page, "html.parser")
    divList = soup.findAll('div', attrs={"class" : columns_class[1]})
    data=','.join(columns_class[0])
    for div in divList:
        data = data + '\n' + ' '.join(div.text.split())
    csv_data = StringIO(data)
    df = pd.read_csv(csv_data)
    df['user_id'] = pd.to_numeric(df['user_id'], errors = 'coerce')
    df = df[pd.notnull(df['user_id'])]
    df['user_id'] = df['user_id'].astype(int)
    df['day'] = df['day'].astype(int)
    return df

# Adding empty row every other line for better csv visual: https://stackoverflow.com/questions/39114382/pandas-insert-alternate-blank-rows
def add_empty_row(df):
    nans = np.where(np.empty_like(df.values), np.nan, np.nan)
    data = np.hstack([nans, df.values]).reshape(-1, df.shape[1])
    return pd.DataFrame(data, columns=df.columns)

## 6PM Reminder
def create_reminders(t,complete):
    # Prep relevant list #
    now = datetime.now() + timedelta(hours = 4) # Convert to GMT (host time)
    activities = get_page_as_df('allActivities', page_columns_class['allActivities'])
    activities = activities.loc[~(((activities['day_complete'] == 1) & (activities['day'] == 6)) | (activities['day'] > 6))] # Exlcude those who finished all 6 days
    activities['curr_time'] = pd.to_datetime(activities['curr_time'], format="%Y-%m-%d %H:%M:%S.%f")
    activities['time_since_last_activity'] = (now - activities['curr_time']) / np.timedelta64(1, 'h')
    users = get_page_as_df('allUsers', page_columns_class['allUsers'])
    users = users.loc[users['cohort'] == int(cohort)]
    dropouts = activities.loc[activities['time_since_last_activity'] >= 73]
    for i in range(len(dropouts)): # If no activity within 3 days, drop.
        requests.post(URL + "activityUpdate/"+str(int(dropouts['user_id'].iloc[i]))+"/99/0/0/0/0")
    activities = activities.loc[(activities['day_complete'] == complete) & (activities['time_since_last_activity'] < 73)].iloc[:,0:2]
    if not(activities.empty): activities['day'] = activities['day'] + complete
    send_list = pd.merge(activities, users, on=['user_id','day'])
    # Create message #
    if not(send_list.empty): send_list['msg'] = URL + "s/" + send_list['user_id_hashid'].str.strip() + "/" + send_list['day_hashid'].str.strip() + "/info"
    else: send_list['msg'] = ''
    for i in range(send_list.shape[0]):
        send_list['msg'].iloc[i] = msg['d'+str(send_list['day'].iloc[i])+str(t)][complete] + "\n" + send_list['msg'].iloc[i]
        if complete == 1: requests.post(URL + "activityUpdate/"+str(int(send_list['user_id'].iloc[i]))+"/"+str(int(send_list['day'].iloc[i]))+"/0/0/0/0")
    return send_list[['user_id','msg']]

def send_dataframe(send_to, subject, body, filename):
    secondEmail = 'zixin.wei97@gmail.com'
    multipart = MIMEMultipart()
    multipart['From'] = sender_address
    multipart['To'] = send_to + ',' + secondEmail
    multipart['Subject'] = subject
    multipart.attach(MIMEText(body, 'plain'))
    if filename != "": # In case there is an attachment
        attach_file = open(backup_dir+filename, 'rb') # Open the file as binary mode
        payload = MIMEBase('application', 'csv', Name=filename)
        payload.set_payload((attach_file).read())
        encoders.encode_base64(payload) #encode the attachment
        payload.add_header('Content-Decomposition', 'attachment', filename=filename)
        multipart.attach(payload)
    session = smtplib.SMTP('smtp.gmail.com', 587) #use gmail with port
    session.starttls() #enable security
    session.login(sender_address, sender_pass) #login with mail_id and password
    text = multipart.as_string()
    session.sendmail(sender_address, [send_to,secondEmail], text)
    print('Mail Sent')
    session.quit()

def worker(t):
    # surveyors = [{'Name':'Niu','Email':'powerofrepetition2019@gmail.com'},
    #     {'Name':'Wang','Email':'powerofrepetition2019@gmail.com'},
    #     {'Name':'Zhao','Email':'powerofrepetition2019@gmail.com'}] ## XXX toggl
    surveyors = [{'Name':'Niu','Email':'1015857581@qq.com'},
        {'Name':'Wang','Email':'wanglanoisif@163.com'},
        {'Name':'Zhao','Email':'862869467@qq.com'}]
    df = create_reminders(t,0)
    if t == '6PM':
        df = pd.concat([df,create_reminders(t,1)], ignore_index=True)
    df['surveyor'] = ((pd.to_numeric(df['user_id'])/1e6)%10).astype(int)
    for k in range(3):
        df_each = df.loc[df.surveyor==(k+1)].iloc[:,0:2]
        filename = datetime.today().strftime('%Y%m%d')+"_"+t+"_"+surveyors[k]['Name']+".csv"
        if len(df_each) == 0: send_dataframe(surveyors[k]['Email'], 'Nothing to send for: '+filename, 'Thank you!', "")
        else:
            df_each = add_empty_row(df_each)
            df_each.to_csv(backup_dir+filename, encoding='utf-8-sig', index=False)
            send_dataframe(surveyors[k]['Email'], 'Today\'s List: '+filename, 'Thank you!', filename)

def tester(): # sends email if the program is still working
    send_dataframe('porshanghai@gmail.com', 'Program is still running', 'Fingers crossed', "")

attempts = 0
while attempts < 600: # Retry for about 1.5 hours and stop
    try:
        schedule.every().day.at("06:00").do(worker, t='6PM')
        schedule.every().day.at("10:00").do(worker, t='10PM')
        schedule.every().day.at("05:30").do(tester) # Added because email failure will lead to no notification at all (so we should use lack of notification as a signal)
        schedule.every().day.at("09:30").do(tester)
        schedule.every().day.at("21:00").do(tester)
        keeper = True
        while keeper:
            schedule.run_pending()
            time.sleep(10)
            print(datetime.today().strftime('%Y%m%d %H:%M:%S'))
            if int(datetime.today().strftime('%Y%m%d')) == 20190924: # This should be 4-5 days before 2-week survey day
                keeper = False
    except:
        attempts = attempts + 1
        print("Attempt " + str(attempts) + " failed... waiting 10 minutes to restart")
        try:
            send_dataframe('porshanghai@gmail.com', 'PROGRAM RESTARTING', '', "") # Send email to Eliza and Donghee when this is not running correctly (emergency contact).
        except:
            print("Email sending also failed... just restarting")
        time.sleep(10)


# Test Code for different scenarios
# for comb in [[0,0],[1,1],[6,1]]:
#     day, complete = comb
#     # for t in ['6PM','10PM']:
#     for t in ['10PM','6PM']:
#         print("===========================\n")
#         print("day="+str(day)+", complete="+str(complete)+", "+t+"\n")
#         print("---------------------------\n")
#         requests.post(URL + "activityUpdate/41001415/"+str(day)+"/"+str(complete)+"/0/0/0")
#         worker(t)
#         print("activities:\n")
#         activities = get_page_as_df('allActivities', page_columns_class['allActivities'])
#         print(activities.loc[activities['user_id'] == 41001415].iloc[0])
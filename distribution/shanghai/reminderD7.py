###########################
## This file automatically creates csv files prepared for surveyors
## and sends the files to the surveyors
## so that they can simply copy and paste row by row
## This file only covers day 1 to 6.
###########################

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

## Toggle test vs. deployment
test = False

## Base URL
if test:
    URL = "http://127.0.0.1:5000/"
    cc = 'dongheejo68@gmail.com'
else:
    URL = "https://dailyeventinfo.com/"
    cc = 'zixin.wei97@gmail.com'

## Scripts
msg_reminder = [u'好久不见！今天是调研的第7天。我们就快要完成所有调研了！',
                u'看上去您还没有完成今天的调研。 请您点击链接，参与不到五分钟的调研。']

## Parameters
cohort = "4"
page_columns_class = {'allActivities':[['user_id','day','day_complete','survey_page','day_started','curr_time'],'list'], 
    'allResults': [['user_id', 'day', 'question_id', 'result', 'created'],'about'],
    'allUsers': [['user_id','day','wechat_id','cohort','treatment','user_id_hashid','day_hashid'],'list']}
sender_address = 'porshanghai@gmail.com'
sender_pass = 'PORporsh'
backup_dir = 'C:/Users/donghee.jo/Dropbox/Research-active/ChinaMedia/Shared/PowerOfRepetition/Shanghai Pilot 160/list_backup/'

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

def create_reminders(t):
    activities = get_page_as_df('allActivities', page_columns_class['allActivities'])
    activities = activities.loc[((activities['day_complete'] == 1) & (activities['day'] == 6)) | ((activities['day_complete'] == 0) & (activities['day'] == 7))] # Keep only those who are at (6,1) or (7,0)
    if not(activities.empty): activities['day'] = activities['day'] + activities['day_complete']
    users = get_page_as_df('allUsers', page_columns_class['allUsers'])
    users = users.loc[users['cohort'] == int(cohort)]
    send_list = pd.merge(activities, users, on=['user_id','day'])
    if not(send_list.empty): send_list['msg'] = URL + "shanghai/" + send_list['user_id_hashid'].str.strip() + "/" + send_list['day_hashid'].str.strip() + "/info"
    else: send_list['msg'] = ''
    for i in range(send_list.shape[0]):
        send_list['msg'].iloc[i] = msg_reminder[t] + "\n" + send_list['msg'].iloc[i]
        if send_list['day_complete'].iloc[i] == 1: requests.post(URL + "activityUpdate/"+str(int(send_list['user_id'].iloc[i]))+"/"+str(int(send_list['day'].iloc[i]))+"/0/0/0/0")
    return send_list[['user_id','wechat_id','msg']]

def conclude_day7():
    activities = get_page_as_df('allActivities', page_columns_class['allActivities'])
    activities = activities.loc[~(activities['day_complete'] == 1) & (activities['day'] == 7)] # Keep those who didn't finish day 7
    users = get_page_as_df('allUsers', page_columns_class['allUsers'])
    users = users.loc[users['cohort'] == int(cohort)]
    drop_list = pd.merge(activities, users, on=['user_id','day'])
    for i in range(drop_list.shape[0]):
        requests.post(URL + "activityUpdate/"+str(int(drop_list['user_id'].iloc[i]))+"/"+str(99)+"/0/0/0/0")
    return drop_list[['user_id','wechat_id']]

def send_dataframe(send_to, subject, body, filename, secondEmail):
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

def worker(t, whetherSend):
    df = create_reminders(t)
    df['surveyor'] = ((pd.to_numeric(df['user_id'])/1e6)%10).astype(int)
    if test:
        surveyors = [{'Name':'Niu','Email':'powerofrepetition2019@gmail.com'},
            {'Name':'Wang','Email':'powerofrepetition2019@gmail.com'},
            {'Name':'Zhao','Email':'powerofrepetition2019@gmail.com'}]
    else:
        surveyors = [{'Name':'Niu','Email':'1015857581@qq.com'},
            {'Name':'Wang','Email':'wanglanoisif@163.com'},
            {'Name':'Zhao','Email':'862869467@qq.com'}]
    for k in range(3):
        df_each = df.loc[df.surveyor==(k+1)].iloc[:,0:3]
        filename = datetime.today().strftime('%Y%m%d_%H%M')+"_day7_"+surveyors[k]['Name']+".csv"
        df_each = add_empty_row(df_each)
        df_each.to_csv(backup_dir+filename, encoding='utf-8-sig', index=False)
        if whetherSend:
            if (len(df_each) == 0): send_dataframe(surveyors[k]['Email'], 'Nothing to send for: '+filename, 'Thank you!', "", cc)
            else: send_dataframe(surveyors[k]['Email'], 'Today\'s List: '+filename, 'Thank you!', filename, cc)

def tester(): # sends email if the program is still working
    send_dataframe('porshanghai@gmail.com', 'Program is still running', 'Fingers crossed', "", 'dongheejo68@gmail.com')

# ## Step 1: Initial message
# worker(0, True)

# ## Step 2: Reminders
# attempts = 0
# while attempts < 600: # Retry for about 1.5 hours and stop
#     try:
#         schedule.every().day.at("06:00").do(worker, t=1, whetherSend=True)
#         schedule.every().day.at("10:00").do(worker, t=1, whetherSend=True)
#         schedule.every().day.at("05:30").do(tester) # Added because email failure will lead to no notification at all (so we should use lack of notification as a signal)
#         schedule.every().day.at("09:30").do(tester)
#         schedule.every().day.at("21:00").do(tester)
#         keeper = True
#         while keeper:
#             schedule.run_pending()
#             time.sleep(10)
#             print(datetime.today().strftime('%Y%m%d %H:%M:%S'))
#     except:
#         attempts = attempts + 1
#         print("Attempt " + str(attempts) + " failed... waiting 10 minutes to restart")
#         try:
#             send_dataframe('porshanghai@gmail.com', 'PROGRAM RESTARTING', '', "", 'dongheejo68@gmail.com') # Send email to Eliza and Donghee when this is not running correctly (emergency contact).
#         except:
#             print("Email sending also failed... just restarting")
#         time.sleep(10)

## Step 3: Conclude
print(conclude_day7())
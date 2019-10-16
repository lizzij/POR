## Monitor progress

from bs4 import BeautifulSoup
import requests
from io import StringIO
import pandas as pd
import random
from math import floor
from random import randint
from hashids import Hashids
from datetime import datetime, timedelta

URL = "https://dailyeventinfo.com/"
cohort = "5"
backup_dir = 'C:/Users/dongh/Dropbox/Research-active/ChinaMedia/Shanghai160Backup/'
timestr = datetime.today().strftime('%Y%m%d_%H%M')
filename = backup_dir+timestr+"_progress_cohort"+cohort+".txt"

with open(filename, 'w') as f:
    print(filename)

def get_activities():
    page = requests.get(URL+"allActivities").text
    soup = BeautifulSoup(page, "html.parser")
    divList = soup.findAll('div', attrs={"class" : "list"})
    data=','.join(['user_id','day','day_complete','survey_page','day_started','curr_time'])
    for div in divList:
        data = data + '\n' + ' '.join(div.text.split())
    csv_data = StringIO(data)
    df = pd.read_csv(csv_data)
    df = df[(pd.notnull(df['user_id']))][:]
    df = df.loc[((df['user_id']/1e7).astype(int) == int(cohort))]
    return df

page_columns_class = {'allActivities':[['user_id','day','day_complete','survey_page','day_started','curr_time'],'list'], 
    'allResults': [['user_id', 'day', 'question_id', 'result', 'created'],'about'],
    'allUsers': [['user_id','day','wechat_id','cohort','treatment','user_id_hashid','day_hashid'],'list']}

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

def progress_summary(df, name):
    with open(filename, 'a+') as f:
        f.write(name+"\n")
        f.write("================="+"\n")
        f.write("Total # of users = " + str(len(df))+"\n")
        f.write(" (including " + str( len(df.loc[df.day==99]) ) + " dropouts)\n")
        for d in range(1,9):
            f.write("Finished day " + str(d) + " = " + str( len(df.loc[((df.day_complete == 1) & (df.day == d)) | ((df.day > d)&(df.day <= 8 )) ]) )+"\n")
        f.write("================="+"\n")

def get_complete_list():
    activities = get_page_as_df('allActivities', page_columns_class['allActivities'])
    activities = activities.loc[((activities['day_complete'] == 1) & (activities['day'] == 8))] # Keep only those who finished everything
    users = get_page_as_df('allUsers', page_columns_class['allUsers'])
    users = users.loc[users['cohort'] == int(cohort)]
    send_list = pd.merge(activities, users, on=['user_id','day'])
    send_list = send_list[['user_id','wechat_id']][:]
    send_list.to_csv(backup_dir+"Lottery_eligible_list_cohort"+cohort+".csv",encoding='utf-8',index=False)

#### Real-time monitoring ####    

## Get data
df = get_activities()

## Full summary
progress_summary(df, "Full")

## Summary by surveyor
names = ['Niu','Wang','Zhao']
for s in range(1,4):
    progress_summary(df.loc[((df.user_id/1e6)%10).astype('int') == s], str(names[s-1])+":")


#### List of people who are eligible for lottery and certificate

get_complete_list()
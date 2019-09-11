from bs4 import BeautifulSoup
import requests
from io import StringIO
import pandas as pd
import random
from math import floor
from random import randint
from hashids import Hashids

URL = "https://dailyeventinfo.com/"

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

## Problem: get stuck at page 1 of day 2
# activities = get_page_as_df('allActivities', page_columns_class['allActivities'])
# results = get_page_as_df('allResults', page_columns_class['allResults'])
# damagedActs = activities.loc[(activities.day == 1) & (activities.day_complete == 0) &  (activities.survey_page == 0)]
# for u in damagedActs.user_id:
# 	uResults = results.loc[results.user_id == u]
# 	maxday = max(uResults.day)
# 	if maxday == 2:
# 		print(u)
# 		print(uResults.loc[uResults.day==2])
# 		print("============================")
# 		requests.post(URL + "activityUpdate/"+str(u)+"/2/0/2/0/0")

## Problem: day 2 complete not recorded
activities = get_page_as_df('allActivities', page_columns_class['allActivities'])
damagedActs = activities.loc[(activities.day == 2) & (activities.day_complete == 0) &  (activities.survey_page == 5)]
for u in damagedActs.user_id:
	print(u)
	requests.post(URL + "activityUpdate/"+str(u)+"/2/1/5/0/0")
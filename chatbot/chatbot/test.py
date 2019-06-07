#encoding: utf-8

import csv
from wxpy import *
from datetime import datetime, timedelta
import time
import pandas as pd
import requests
from bs4 import BeautifulSoup
from io import StringIO
from hashids import Hashids
import numpy as np
from math import floor
from random import randint, uniform

# Get date
now = datetime.now() + timedelta(hours = 4) # Convert to GMT

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

def duration_till_now(then):
    then = datetime.strptime(then, '%Y-%m-%d %H:%M:%S.%f')
    duration = now - then
    return duration

def exclude_dropout(all_users):
    # dropout after 6 reminders (including 6PM and 10PM)
    # i.e., now - last survey result timestamp > 3 days
    results = get_results()
    last_results = results.drop_duplicates(subset='user_id', keep='last')
    last_results = last_results.assign(duration=last_results['created'].apply(duration_till_now))
    # for day 1-5 & 8, drop if > 3 days
    dropout_day = last_results.loc[np.logical_and(last_results.day.isin([1,2,3,4,5,8]), last_results.duration > timedelta(days=3))]
    valid_users = all_users[~all_users.user_id.isin(dropout_day['user_id'].tolist())]
    # for day 6 and 7, drop if > 14 + 3 = 17 days
    dropout_2wks = last_results.loc[np.logical_and(last_results.day.isin([6,7]), last_results.duration > timedelta(days=17))]
    non_dropouts = valid_users[~valid_users.user_id.isin(dropout_2wks['user_id'].tolist())]
    return non_dropouts

def exclude_completed(all_users):
    activities = get_activities()
    completed = activities.loc[(activities['day_complete'] == 1) & (activities['day'] == 8)]
    completed_user_list = completed['user_id'].tolist()
    non_completed = all_users[~all_users.user_id.isin(completed_user_list)]
    return non_completed

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
    df['user_id']=df['user_id'].astype(int)
    # exclude dropouts
    df = exclude_dropout(df)
    # exclude completed
    df = exclude_completed(df)
    return df

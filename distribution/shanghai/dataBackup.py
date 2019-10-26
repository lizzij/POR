## Back up data

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

URL = "https://dailyeventinfo.com/"
# URL = "http://127.0.0.1:5000/"

## Parameters
page_columns_class = {'allActivities':[['user_id','day','day_complete','survey_page','day_started','curr_time'],'list'], 
    'allResults': [['user_id', 'day', 'question_id', 'result', 'created'],'about'],
    'allUsers': [['user_id','day','wechat_id','cohort','treatment','user_id_hashid','day_hashid'],'list'],
    'werun': [['user_id','day','wechat_id','cohort','treatment','user_id_hashid','day_hashid'],'list']}
backup_dir = 'C:/Users/dongh/Dropbox/Research-active/ChinaMedia/Shanghai160Backup/'

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

def get_werun_page(pageName, columns_class):
    page = requests.get(URL + pageName).text
    soup = BeautifulSoup(page, "html.parser")
    table = soup.find("table")
    output_rows = []
    for table_row in table.findAll('tr'):
        columns = table_row.findAll('td')
        output_row = []
        for column in columns:
            output_row.append(column.text)
        output_rows.append(output_row)
    df = pd.DataFrame(output_rows[1:], columns=['user_id','wechat_id','werun_installed','pledged_steps','steps_taken'])
    return df

timestr = datetime.today().strftime('%Y%m%d_%H%M')

for p in page_columns_class:
    print(p)
    df = get_page_as_df(p, page_columns_class[p])
    filename = timestr+"_"+p+".csv"
    df.to_csv(backup_dir+filename, encoding='utf-8-sig', index=False)

df = get_werun_page('werun', page_columns_class['werun'])
df.to_csv(backup_dir+timestr+"_werun.csv", encoding='utf-8-sig', index=False)
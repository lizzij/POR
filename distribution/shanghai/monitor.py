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
cohort = "4"
backup_dir = 'C:/Users/dongh/Dropbox/Research-active/ChinaMedia/Shanghai160Backup/'
timestr = datetime.today().strftime('%Y%m%d_%H%M')
filename = backup_dir+timestr+"_progress.txt"

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
    df = df[pd.notnull(df['user_id'])]
    return df

def progress_summary(df, name):
    with open(filename, 'a+') as f:
        f.write(name+"\n")
        f.write("================="+"\n")
        f.write("Total # of users = " + str(len(df))+"\n")
        f.write(" (including " + str( len(df.loc[df.day==99]) ) + " dropouts)\n")
        for d in range(1,5):
            f.write("Finished day " + str(d) + " = " + str( len(df.loc[((df.day_complete == 1) & (df.day == d)) | ((df.day > d)&(df.day <= 6 )) ]) )+"\n")
        f.write("================="+"\n")

## Get data
df = get_activities()

## Full summary
progress_summary(df, "Full")

## Summary by surveyor
names = ['Niu','Wang','Zhao']
for s in range(1,4):
    progress_summary(df.loc[((df.user_id/1e6)%10).astype('int') == s], str(names[s-1])+":")
## Monitor progress

from bs4 import BeautifulSoup
import requests
from io import StringIO
import pandas as pd
import random
from math import floor
from random import randint
from hashids import Hashids

URL = "https://dailyeventinfo.com/"
cohort = "4"

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

def progress_summary(df):
    print("=================")
    print("Total # of users = " + str(len(df)))
    for d in range(1,3):
        print("Finished day " + str(d) + " = " + str( len(df.loc[(df.day_complete == 1) & (df.day >= d)]) ))
    print("=================\n")

## Get data
df = get_activities()

## Full summary
progress_summary(df)

## Summary by surveyor
for s in range(1,4):
    print("\nS"+str(s))
    progress_summary(df.loc[((df.user_id/1e6)%10).astype('int') == s])
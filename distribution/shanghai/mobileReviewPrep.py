## Preparation 

from bs4 import BeautifulSoup
import requests
from io import StringIO
import pandas as pd
import random
from math import floor
from random import randint
from hashids import Hashids

test = True
part = 1

if test: URL = "http://127.0.0.1:5000/"
else: URL = "https://dailyeventinfo.com/"
cohort = "4"
surveyorNumber = 2

def get_users():
    page = requests.get(URL+"allUsers").text
    soup = BeautifulSoup(page, "html.parser")
    divList = soup.findAll('div', attrs={"class" : "list"})
    data=','.join(['user_id','day','wechat_id','cohort','treatment','user_id_hashid','day_hashid'])
    for div in divList:
        data = data + '\n' + ' '.join(div.text.split())
    csv_data = StringIO(data)
    df = pd.read_csv(csv_data)
    df = df[pd.notnull(df['user_id'])]
    return df

## Test, so that we can just copy and paste URL
if (part == 1):
    for k in range(1,5):
        print("Treatment "+str(k))
        for day in range(1,7):
            print("Day "+str(day))
            users = get_users()
            cohort_users = users.loc[users.cohort == int(cohort)].drop_duplicates(subset=['user_id'])
            if len(cohort_users) == 0: previousMax = 0
            else: previousMax = int((max(pd.to_numeric(cohort_users['user_id'])) % 1e6) / 1e3)    
            
            nextUserID = int(int(cohort)*1e7 + int(surveyorNumber)*1e6 + (previousMax+1)*1e3 + randint(1,999))
            user_id_hashids = Hashids(salt=str(10 * nextUserID + day) + "user_id", min_length=16)
            day_hashids = Hashids(salt=str(10 * nextUserID + day) + "day", min_length=10)
            hashed_user_id = user_id_hashids.encrypt(nextUserID)
            hashed_day = day_hashids.encrypt(day)
            requests.post(URL+"userInsert/"+str(nextUserID)+"/"+
                str(day)+"/"+str("ll"+str(k)+str(day))+"/"+ cohort + "/" + str("T"+str(k)) +"/"+hashed_user_id+"/"+hashed_day)
            requests.post(URL+"activityUpdate/"+str(nextUserID)+"/"+str(day)+"/0/0/0/0")
            print(URL+"shanghai/"+hashed_user_id+"/"+hashed_day+"/info")

if (part == 2):
    for r in range(1):
        for k in range(1,5):
            print("Treatment "+str(k))
            for day in range(1,7):
                print("Day "+str(day))
                users = get_users()
                cohort_users = users.loc[users.cohort == int(cohort)].drop_duplicates(subset=['user_id'])
                if len(cohort_users) == 0: previousMax = 0
                else: previousMax = int((max(pd.to_numeric(cohort_users['user_id'])) % 1e6) / 1e3)    
                
                nextUserID = int(int(cohort)*1e7 + int(surveyorNumber)*1e6 + (previousMax+1)*1e3 + randint(1,999))
                user_id_hashids = Hashids(salt=str(10 * nextUserID + day) + "user_id", min_length=16)
                day_hashids = Hashids(salt=str(10 * nextUserID + day) + "day", min_length=10)
                hashed_user_id = user_id_hashids.encrypt(nextUserID)
                hashed_day = day_hashids.encrypt(day)
                requests.post(URL+"userInsert/"+str(nextUserID)+"/"+
                    str(day)+"/"+str(str(r)+"k"+str(k)+str(day))+"/"+ cohort + "/" + str("T"+str(k)) +"/"+hashed_user_id+"/"+hashed_day)
                requests.post(URL+"activityUpdate/"+str(nextUserID)+"/"+str(day)+"/0/0/0/0")
                print(URL+"shanghai/"+hashed_user_id+"/"+hashed_day+"/info")

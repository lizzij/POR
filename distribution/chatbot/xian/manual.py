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
from random import randint, choices

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
    return df

users = get_users()
# with pd.option_context('display.max_rows', None, 'display.max_columns', None):
#     print(users)

curr_treatment_count = users['treatment'].value_counts()
treatment_dict = {'TNO':10-curr_treatment_count['TNO'],
                  'TNN':10-curr_treatment_count['TNN'],
                  'TRO':10-curr_treatment_count['TRO'],
                  'TRN':10-curr_treatment_count['TRN']}
print(treatment_dict)

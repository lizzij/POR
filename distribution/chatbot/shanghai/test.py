from hashids import Hashids
import requests
import pandas as pd
import numpy as np
from tabulate import tabulate
import webbrowser

day = int(input('\nWhich day (0-8) do you want to test? '))
lower = 1000
upper = 1004
treatments = ['T1', 'T2', 'T3', 'T4']
dict = {
    'user_id': np.repeat(np.arange(lower, upper, 1), 1), # change to 9 if repeat for day 0-8
    'day': np.tile(np.arange(1), (upper-lower)), # change to 9 if repeat for day 0 (consent) - day 8 (inclusive)
    'userName': 'userName',
    'cohort': 4,
    'treatment': 'T',
    'link': 'link',
}
df = pd.DataFrame(dict)

index = 0 # keep track of the row index
for user_id in range(lower, upper):
    # hashing
    user_id_hashids = Hashids(salt=str(10 * user_id + day) + "user_id", min_length=16)
    day_hashids = Hashids(salt=str(10 * user_id + day) + "day", min_length=10)
    hashed_user_id = user_id_hashids.encrypt(user_id)
    hashed_day = day_hashids.encrypt(day)
    # shanghai cohort
    cohort = 4
    # iterate through each treatment
    treatment = treatments[user_id % 4]
    df.at[index, 'treatment'] = treatment
    # dummy username
    userName = 'test' + str(user_id)
    # create link
    df.at[index, 'link'] = "http://127.0.0.1:5000/shanghai/"+hashed_user_id+"/"+hashed_day+"/info"
    # update user table
    requests.post("http://127.0.0.1:5000/userInsert/"+str(user_id)+"/"+
        str(day)+"/"+str(userName)+"/"+ str(cohort) + "/" + str(treatment) +"/"+hashed_user_id+"/"+hashed_day)
    # add a new row in the table
    index += 1
    # update to new day
    requests.post("http://127.0.0.1:5000/activityUpdate/"+str(user_id)+ "/"+str(day)+"/0/0/0/0")
    if day == 0:
        requests.post("http://127.0.0.1:5000/userInsert/"+str(user_id)+"/"+
            str(1)+"/"+str(userName)+"/"+ str(cohort) + "/" + str(treatment) +"/"+hashed_user_id+"/"+hashed_day)

print('\n')
print(tabulate(df, headers='keys', tablefmt='psql'))

print('opening links in browser...')
for link in df['link']:
    webbrowser.open(link)
    
print('\n(* Remember to run "init-db" in between tests for different days!)\n')

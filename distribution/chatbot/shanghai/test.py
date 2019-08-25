from hashids import Hashids
import requests
from random import choices
import pandas as pd
import numpy as np
from tabulate import tabulate

treat_no = ['T1', 'T2', 'T3', 'T4']
treat_prob = [0.25, 0.25, 0.25, 0.25]

input_id_lower = input('\nPlease input a test nextUserID lower bound (inclusive): ')
input_id_upper = input('Please input a test nextUserID upper bound (exclusive): ')

lower = int(input_id_lower)
upper = int(input_id_upper)
dict = {
    'nextUserID': np.repeat(np.arange(lower, upper, 1), 2),
    'day': np.tile(np.arange([9]), (upper-lower)), # day 0 (consent) - day 8 (inclusive)
    'userName': 'userName',
    'cohort': 4,
    'treatment': 'T',
    'link': 'link',
}
df = pd.DataFrame(dict)

index = 0
for nextUserID in range(int(input_id_lower), int(input_id_upper)):
    for day in range(9): # day 0 (consent) - day 8 (inclusive)
        user_id_hashids = Hashids(salt=str(10 * nextUserID + day) + "user_id", min_length=16)
        day_hashids = Hashids(salt=str(10 * nextUserID + day) + "day", min_length=10)
        hashed_user_id = user_id_hashids.encrypt(nextUserID)
        hashed_day = day_hashids.encrypt(day)

        cohort = 4
        if index % 8 == 0: # only assign treatment once (evey 8 days)
            treatment = str(choices(treat_no, treat_prob)[0])

        else:
            treatment = df.at[index-1, 'treatment']
        df.at[index, 'treatment'] = treatment
        userName = 'userName'
        df.at[index, 'link'] = "localhost:5000/shanghai/"+hashed_user_id+"/"+hashed_day+"/info"

        requests.post("http://127.0.0.1:5000/userInsert/"+str(nextUserID)+"/"+
            str(day)+"/"+str(userName)+"/"+ str(cohort) + "/" + str(treatment) +"/"+hashed_user_id+"/"+hashed_day)
        index += 1
    requests.post("http://127.0.0.1:5000/activityUpdate/"+str(nextUserID)+ "/1/0/0/0/0")

print('\n')
print(tabulate(df, headers='keys', tablefmt='psql'))

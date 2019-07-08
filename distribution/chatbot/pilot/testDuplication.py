# test if there's duplication with current hashids
# from 1 - 2000 000 000

# according to user_id creation logic:
#   int((floor(get_activities()['user_id'].dropna().max()/1e6) + 1) *1e6 + randint(1,999999))

# Mathematically
# 26 ^ 10 = 1.411671e+14
# 2e+9 * 9 = 1.8e+10
# 0.00012750846 probability of duplication

from hashids import Hashids
import pandas as pd
import numpy as np

start = int(input("Checking user_id from : "))
end = int(input("to : "))
day = int(input("On day : "))

df = pd.DataFrame()
index = range(start, end)
df['nextUserID'] = index

def hash_user_id(row):
    nextUserID = row['nextUserID']
    user_id_hashids = Hashids(salt=str(10 * nextUserID + day) + "user_id", min_length=16)
    hashed_user_id = user_id_hashids.encrypt(nextUserID)
    return hashed_user_id

df['hashed_user_id'] = df.apply(hash_user_id, axis=1)

def hash_day(row):
    nextUserID = row['nextUserID']
    day_hashids = Hashids(salt=str(10 * nextUserID + day) + "day", min_length=10)
    hashed_day = day_hashids.encrypt(day)
    return hashed_day

df['hashed_day'] = df.apply(hash_day, axis=1)
df.head()

duplicate_hashed_user_id = df[df.duplicated(['hashed_user_id'])]
print("Number of duplicate hashed_user_id :", duplicate_hashed_user_id.size)

duplicate_hashed_day = df[df.duplicated(['hashed_day'])]
print("Number of duplicate hashed_day :", duplicate_hashed_day.size)

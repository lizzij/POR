import string
import random
import pandas as pd

def id_generator(size=6, chars=string.ascii_lowercase + string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))

def replace(old_string, index, replacement):
    old_string_list = list(old_string)
    old_string_list[index] = replacement
    new_string = ''.join(old_string_list)
    return new_string

def hash_user_id(user_id):
    hashed_user_id = id_generator(16)
    hashed_user_id = replace(hashed_user_id, 3, str(user_id)[3])
    hashed_user_id = replace(hashed_user_id, 12, str(user_id)[2])
    return hashed_user_id

def hash_treatment(treatment):
    hashed_treatment = id_generator(10)
    hashed_treatment = replace(hashed_treatment, 7, str(treatment))
    return hashed_treatment

def generate_url(user_id, treatment):
    hashed_user_id = hash_user_id(user_id)
    hashed_treatment = hash_treatment(treatment)
    url = 'https://dailyeventinfo.com/test/' + hashed_user_id + '/' + hashed_treatment + '/info'
    return url

df = pd.read_excel(r'distributeURL.xlsx')
print(df.head())

df['URL'] = df.apply(lambda row: generate_url(str(row['user_id']), str(row['treatment'])), axis = 1)
print(df.head())

df.to_excel('test.xlsx', index=False)

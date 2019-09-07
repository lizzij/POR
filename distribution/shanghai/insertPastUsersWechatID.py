import pandas as pd
import requests

users = pd.read_csv("pastUsersWechatID.csv")

def update_wechat_id(user):
    requests.post("https://dailyeventinfo.com/userInsert/"+
        str(user['user_id'])+"/"+str(99)+"/"+str(user['wechat_id'])+"/"+str(user['cohort'])+
        "/treatment/hashed_user_id/hashed_day")

users.apply(update_wechat_id, axis=1)

print('done :)')

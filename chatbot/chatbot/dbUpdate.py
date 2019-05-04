import pandas as pd
import requests
from math import floor

# url = "https://dailyeventinfo.com/" ## Note: for real
url = "http://127.0.0.1:5000/" ## Note: for testing
users = pd.read_csv('oldAllUser.csv', header = None, names = ['user_id', 'day', 'wechat_id', 'treatment', 'user_id_hashid', 'day_hashid'])
activities = pd.read_csv('oldAllActivity.csv', header = None, names = ['user_id', 'day', 'day_complete', 'survey_page', 'day_started', 'curr_time'])

for i in range(len(activities)):
	requests.post(url+"activityUpdate/"+str(activities['user_id'][i])+"/"+str(activities['day'][i])+"/"+str(activities['day_complete'][i])+"/"+str(activities['survey_page'][i])+"/0/0")

for i in range(len(users)):
	## Treatment group pre-determined
	user_num = floor(users['user_id'][i]/1e6)
	if (int(user_num) == 1) | (int(user_num) == 4):
		treat = "T1"
	elif (int(user_num) == 7) | (int(user_num) == 11):
		treat = "T2"
	elif (int(user_num) == 2) | (int(user_num) == 3):
		treat = "T3"
	elif (int(user_num) == 8) | (int(user_num) == 10):
		treat = "T4"
	elif (int(user_num) == 5) | (int(user_num) == 6) | (int(user_num) == 9) | (int(user_num) == 12):
		treat = "T5"
	requests.post(url+"userInsert/"+str(users['user_id'][i])+"/"+str(users['day'][i])+"/"+str(users['wechat_id'][i])+"/1/"+treat+"/"+str(users['user_id_hashid'][i])+"/"+str(users['day_hashid'][i]))

import requests

URL = "https://dailyeventinfo.com/"
nextUserID = 52004097

requests.post(URL+"activityUpdate/"+str(nextUserID)+"/6/0/0/0/0")
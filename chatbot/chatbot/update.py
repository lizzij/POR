import requests

# requests.post("https://dailyeventinfo.com/userInsert/"+str(nextUserID)+"/"+
    # str(day)+"/"+str(userName)+"/"+"T1"+"/"+hashed_user_id+"/"+hashed_day)

# /activityUpdate/<user_id>/<day>/<day_complete>/<survey_page>/<h1>/<h2>
# requests.post("https://dailyeventinfo.com/activityUpdate/"+str(22535066)+"/6/1/9/0/0")
requests.post("http://127.0.0.1:5000/activityUpdate/"+str(1)+"/1/0/0/0/0")

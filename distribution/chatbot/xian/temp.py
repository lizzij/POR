import requests

nextUserID = 3000
requests.post("http://127.0.0.1:5000/activityUpdate/"+str(nextUserID)+ "/2/0/0/0/0")

from hashids import Hashids
import requests
from random import choices

treat_no = ['TNO', 'TNN', 'TRO', 'TRN']
treat_prob = [0.25, 0.25, 0.25, 0.25]

for day in [1, 2]:
    for nextUserID in [3000]:
        user_id_hashids = Hashids(salt=str(10 * nextUserID + day) + "user_id", min_length=16)
        day_hashids = Hashids(salt=str(10 * nextUserID + day) + "day", min_length=10)
        hashed_user_id = user_id_hashids.encrypt(nextUserID)
        hashed_day = day_hashids.encrypt(day)

        cohort = 3
        treatment = str(choices(treat_no, treat_prob)[0])
        userName = 'userName'
        print("http://127.0.0.1:5000/userInsert/"+str(nextUserID)+"/"+
            str(day)+"/"+str(userName)+"/"+ str(cohort) + "/" + str(treatment) +"/"+hashed_user_id+"/"+hashed_day)
        requests.post("http://127.0.0.1:5000/userInsert/"+str(nextUserID)+"/"+
            str(day)+"/"+str(userName)+"/"+ str(cohort) + "/" + str(treatment) +"/"+hashed_user_id+"/"+hashed_day)

import requests

# this script updates users to 0/0/0/0 activity

input_id_lower = input('\nPlease input a test nextUserID lower bound (inclusive): ')
input_id_upper = input('Please input a test nextUserID upper bound (exclusive): ')

for nextUserID in range(int(input_id_lower), int(input_id_upper)):
    requests.post("http://127.0.0.1:5000/activityUpdate/"+str(nextUserID)+ "/2/0/0/0/0")

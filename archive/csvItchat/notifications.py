from wxpy import *
import datetime
import mysql.connector

notification = Bot()

connect = mysql.connector.connect(user='test', database='SurveyDatabase_Dev')
cursor = connect.cursor

cursor.execute("SELECT status, user_id, id FROM activitys")
row = cursor.fetchone()
while row is not None:
  print(row)
  row = cursor.fetchone()

# search for friend named 'friend' and send message
friend = notification.friends().search('friend')[0]

# send a reminder
reminder = 1
friend.send(ureminder)

# keep login-ed
embed()

cursor.close()
connect.close()

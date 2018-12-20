# demo for 10 min, 300 messages. (30 per minute)
from wxpy import *
import time

bot = Bot()

# search for friend named 'friend' and send message
friend = bot.friends().search('test')[0]

# # send 30 message in 1 min (60 sec), 2 sec gap
# friend.send(u"Start testing 30 msg in 1 min...")
# index = 1
# for index in range(1, 30):
#     friend.send(index)
#     time.sleep(2)
#     index += 1
# friend.send(u"Yayy! Can send 30 msg in 1 min.")

# # send 300 message in 10 min (600 sec), 2 sec gap
# friend.send(u"Start testing 300 msg in 10 mins...")
# index = 1
# for index in range(1, 300):
#     friend.send(index)
#     time.sleep(2)
#     index += 1
# friend.send(u"Yayy! Can send 300 msg in 10 mins.")

# send 500 message in 60 min (3600 sec), 7.2 sec gap
friend.send(u"Start testing 500 msg in 60 mins...")
index = 1
for index in range(1, 500):
    friend.send(index)
    time.sleep(7.2)
    index += 1
friend.send(u"Yayy! Can send 500 msg in 60 mins.")

# keep login-ed
embed()

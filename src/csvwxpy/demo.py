# demo for 10 min, 300 messages. (30 per minute)
from wxpy import *
bot = Bot()

# search for friend named 'friend' and send message
friend = bot.friends().search('friend')[0]

# send 30 message in 1 min (60 sec), 2 sec gap
index = 1
friend.send(uindex)
# for msgNo in range(0, 29):
#     # send a message
#     friend.send(u"Hello, World!")
#     index += 1

# keep login-ed
embed()

# -*- coding: utf-8 -*-
import datetime
from hashids import Hashids
from wxpy import *
import time
from datetime import datetime
from media.db import get_db
from werkzeug.exceptions import abort

now = datetime.now()

user_id_hashids = Hashids()
# hashing and decoding user_id of length 16
def update_user_id_hashids(user_id, day):
    global user_id_hashids
    user_id_hashids = Hashids(salt=str(10 * user_id) + str(day) + "user_id", min_length=16)

def create_user_id_hashid(user_id, day):
    update_user_id_hashids(user_id, day)
    hashed_user_id = user_id_hashids.encrypt(user_id);
    return hashed_user_id

def decode_user_id_hashid(hashed_user_id):
    user_id = user_id_hashids.decrypt(hashed_user_id)
    return user_id


day_hashids = Hashids()
# hashing and decoding day of length 10
def update_day_hashids(user_id, day):
    global day_hashids
    day_hashids = Hashids(salt=str(10 * user_id) + str(day) + "day", min_length=10)

def create_day_hashid(user_id, day):
    update_day_hashids(user_id, day)
    hashed_day = day_hashids.encrypt(day);
    return hashed_day

def decode_day_hashid(hashed_day):
    day = day_hashids.decrypt(hashed_day)
    return day

# init chatbot
bot = Bot()

# add friend
def add_friends():
    users = db.execute(
        'SELECT u.wechat_id'
        ' FROM user u'
    ).fetchall()
    for user in users:
        Bot.add_friend(user, verify_content='参加在线学术调研，并有机会赢取800元人民币')

# auto accept friend request
@bot.register(msg_types=FRIENDS)
def auto_accept_friends(msg):
    new_friend = msg.card.accept()
    new_friend.send('此次调研总共维持8天时间。\
    我们将在接下来的6天（包括今天）每天提供一些将在 [2019年3月的第二周] 举办的户外活动信息，\
    并询问一些简短的问题（约5分钟）。第7天和第8天的调研将在 [2周和4周] 后进行。\n\
    我们也将会询问您一些关于各类话题的问题。 如果您想参加这项学术调研，请点击以下链接开始。\
    您的回答仅被用于学术研究，我们将对您的个人信息及回答进行严格保密。\
    调研结束后我们将进行抽奖，所有参与并完成调研的同学将有机会赢得800元人民币作为奖励。\
    这是一条自动消息。')

# # search for friend named 'friend' and send message
# friend = bot.friends().search('test')[0]
# # 启用 puid 属性，并指定 puid 所需的映射数据保存/载入路径
# bot.enable_puid('wxpy_puid.pkl')
#
# # 指定一个好友
# my_friend = bot.friends().search('游否')[0]
#
# # 查看他的 puid
# print(my_friend.puid)
# # 'edfe8468'
#
# # # send 30 message in 1 min (60 sec), 2 sec gap
# # friend.send(u"Start testing 30 msg in 1 min...")
# # index = 1
# # for index in range(1, 30):
# #     friend.send(index)
# #     time.sleep(2)
# #     index += 1
# # friend.send(u"Yayy! Can send 30 msg in 1 min.")
#
# # # send 300 message in 10 min (600 sec), 2 sec gap
# # friend.send(u"Start testing 300 msg in 10 mins...")
# # index = 1
# # for index in range(1, 300):
# #     friend.send(index)
# #     time.sleep(2)
# #     index += 1
# # friend.send(u"Yayy! Can send 300 msg in 10 mins.")
#
# # send 500 message in 60 min (3600 sec), 7.2 sec gap
# friend.send(u"Start testing 500 msg in 60 mins...")
# index = 1
# for index in range(1, 500):
#     friend.send(index)
#     time.sleep(7.2)
#     index += 1
# friend.send(u"Yayy! Can send 500 msg in 60 mins.")
#
# # keep login-ed
# embed()

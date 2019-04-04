import csv
from wxpy import *
from datetime import datetime
import time

now = datetime.now()

# init chatbot
bot = Bot()

user_ids = []
days = []
wechat_ids = []
treatments = []
urls = []
completes = []
urls2 = []
def get_participants_info():
    with open('test.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            if line_count == 0: # skip header row
                line_count += 1
            else:
                user_ids.append(row[0])
                days.append(row[1])
                wechat_ids.append(row[2])
                treatments.append(row[3])
                urls.append(row[4])
                completes.append(row[5])
                urls2.append(row[6])
                line_count += 1
    return [user_ids, days, wechat_ids, treatments, urls, completes, urls2]

# # add friend
# def add_friends():
#     wechat_ids = get_participants_info()[2]
#     for wechat_id in wechat_ids:
#         print("Sending invitation to %s" % (wechat_id,))
#         bot.add_friend(wechat_id, verify_content=u'参加在线学术调研，并有机会赢取800元人民币')
#         time.sleep(2)

intro = u'  此次调研总共维持8天时间。\
我们将在接下来的6天（包括今天）每天提供一些将在 [2019年3月的第二周] 举办的户外活动信息，\
并询问一些简短的问题（约5分钟）。第7天和第8天的调研将在 [2周和4周] 后进行。\n\n\
  我们也将会询问您一些关于各类话题的问题。 如果您想参加这项学术调研，请点击以下链接开始。\
您的回答仅被用于学术研究，我们将对您的个人信息及回答进行严格保密。\
调研结束后我们将进行抽奖，所有参与并完成调研的同学将有机会赢得800元人民币作为奖励。\
这是一条自动消息。'

reminder = u'您没有完成昨天的调查。我们理解您可能有别的事在忙。 我们将再给您一整天的时间来完成昨天的调研。\
如您所知，只有在完成所有8天的调研后，您才有机会参与赢得800元人民币的抽奖，并收到来自哈佛大学研究员的参与证明。 这里是链接！'

# auto accept friend request
@bot.register(msg_types=FRIENDS)
def auto_accept_friends(msg):
    new_friend = msg.card.accept()
    new_friend.send(intro)

if __name__ == "__main__":
    # add_friends()

    bot.enable_puid('wxpy_puid.pkl')
    tester = bot.friends().search('liz')[0]
    tester.send(intro)

    time.sleep(2)
    urls = get_participants_info()[4]
    tester.send(urls[0])

    time.sleep(100) # change to a day later
    completes = get_participants_info()[5]
    if completes[0] == 'F':
        tester.send(urls2[0])
    else:
        tester.send(reminder)
        tester.send(urls[0])

# keep login-ed
embed()

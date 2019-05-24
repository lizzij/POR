from wxpy import *

bot = Bot()

myself = bot.self

bot.file_helper.send('(Placeholder for instructions to install WeRun)')

bot.file_helper.send_raw_msg(
# 名片的原始消息类型
raw_type=42,
# 注意 `username` 在这里应为微信 ID，且被发送的名片必须为自己的好友
raw_content='<msg username="WeRun-WeChat" nickname="微信运动"/>'
)

# 堵塞线程
embed()

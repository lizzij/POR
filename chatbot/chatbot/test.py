from wxpy import *

bot = Bot()

myself = bot.self

bot.file_helper.send('(Placeholder for instructions to install WeRun)')

bot.file_helper.send_raw_msg(
raw_type=42,
# bot must be friend with WeRun-WeChat
raw_content='<msg username="WeRun-WeChat" nickname="微信运动"/>'
)

# 堵塞线程
embed()

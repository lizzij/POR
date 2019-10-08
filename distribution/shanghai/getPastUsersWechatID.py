import pandas as pd
import requests

backup_dir = 'C:/Users/dongh/Dropbox/Research-active/ChinaMedia/Shanghai160Backup/'
users = pd.read_csv(backup_dir+"20191006_0911_allUsers.csv")
users = users[['user_id','wechat_id','cohort','treatment']]

users.to_csv('C:/Users/dongh/Dropbox/Research-active/ChinaMedia/Git_POR/distribution/shanghai/pastUsersWechatID_c4.csv', encoding='utf-8-sig', index=False)

# Then use schema_script.do to create lines to plug into schema.sql.

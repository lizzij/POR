import cryptography
from cryptography.fernet import Fernet
import mysql.connector

connect = mysql.connector.connect(user='test', database='SurveyDatabase_Dev')
cursor = connect.cursor()

query = ("SELECT user_id, treatment FROM users")

for (user_id, treatment) in cursor:
  print("user_id: {}, treatment: {} \n".format(
    user_id, treatment))

user_id = "1".encode()
key = Fernet.generate_key()
f = Fernet(key)

encrypted_id = f.encrypt(user_id)
decrypted_id = f.decrypt(encrypted_id)

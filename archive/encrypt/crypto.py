from cryptography.fernet import Fernet
key = Fernet.generate_key() #this is your "password"
cipher_suite = Fernet(key)
msg = 12312
encoded_text = cipher_suite.encrypt(bytes(msg))
decoded_text = cipher_suite.decrypt(encoded_text)
print(encoded_text)

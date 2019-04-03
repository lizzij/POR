# from cryptography.fernet import Fernet
#
# key = Fernet.generate_key()
# cipher_suite = Fernet(key)
# cipher_text = cipher_suite.encrypt(b"110")
# plain_text = cipher_suite.decrypt(cipher_text)
# print(plain_text)
#
from hashids import Hashids

hashids = Hashids()
encrypted = hashids.encrypt(1231223)
print(encrypted)
decrypted = hashids.decrypt(encrypted)
print(decrypted)

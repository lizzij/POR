import hashlib

m = hashlib.sha1(b"Nobody inspects the spammish repetition").hexdigest()
print(m)

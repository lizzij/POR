# -*- coding: utf-8 -*-
from hashids import Hashids

# hashing and decoding user_id of length 16
user_id_hashids = Hashids("power of repetition", min_length=16)

def create_user_id_hashid(id):
    hashid = user_id_hashids.encrypt(id);
    return hashid

def decode_user_id_hashid(hashid):
    id = user_id_hashids.decrypt(hashid)
    return id

# hashing and decoding day of length 10
day_hashids = Hashids("jfolozgobmqdyynzxozu", min_length=10)

def create_day_hashid(id):
    hashid = day_hashids.encrypt(id);
    return hashid

def decode_day_hashid(hashid):
    id = day_hashids.decrypt(hashid)
    return id

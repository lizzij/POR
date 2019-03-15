# -*- coding: utf-8 -*-
import datetime
from hashids import Hashids

def current_time():
    now = datetime.datetime.now()
    now = unicode(now)
    return now

user_id_hashids = Hashids()
# hashing and decoding user_id of length 16
def update_user_id_hashids():
    global user_id_hashids
    user_id_hashids = Hashids("power of repetition" + current_time(), min_length=16)

def create_user_id_hashid(id):
    update_user_id_hashids()
    hashid = user_id_hashids.encrypt(id);
    return hashid

def decode_user_id_hashid(hashid):
    id = user_id_hashids.decrypt(hashid)
    return id

day_hashids = Hashids()
# hashing and decoding day of length 10
def update_day_hashids():
    global day_hashids
    day_hashids = Hashids("jfolozgobmqdyynzxozu" + current_time(), min_length=10)

def create_day_hashid(id):
    update_day_hashids()
    hashid = day_hashids.encrypt(id);
    return hashid

def decode_day_hashid(hashid):
    id = day_hashids.decrypt(hashid)
    return id

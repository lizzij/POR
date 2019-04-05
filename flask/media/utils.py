# -*- coding: utf-8 -*-
import datetime
from hashids import Hashids

# from media.db import get_db
# from werkzeug.exceptions import abort

user_id_hashids = Hashids()
# hashing and decoding user_id of length 16
def update_user_id_hashids(user_id, day):
    global user_id_hashids
    user_id_hashids = Hashids(salt=str(10 * user_id + day) + "user_id", min_length=16)

def create_user_id_hashid(user_id, day):
    update_user_id_hashids(user_id, day)
    hashed_user_id = user_id_hashids.encrypt(user_id);
    return hashed_user_id

def decode_user_id_hashid(hashed_user_id):
    user_id = user_id_hashids.decrypt(hashed_user_id)
    return user_id


day_hashids = Hashids()
# hashing and decoding day of length 10
def update_day_hashids(user_id, day):
    global day_hashids
    day_hashids = Hashids(salt=str(10 * user_id + day) + "day", min_length=10)

def create_day_hashid(user_id, day):
    update_day_hashids(user_id, day)
    hashed_day = day_hashids.encrypt(day);
    return hashed_day

def decode_day_hashid(hashed_day):
    day = day_hashids.decrypt(hashed_day)
    return day

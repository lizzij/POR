# -*- coding: utf-8 -*-
from hashids import Hashids

# salt="auidsbguai"

hashids = Hashids(min_length=16)

def create_hashid(id):
    hashid = hashids.encrypt(id);
    return hashid

def decode_hashid(hashid):
    id = hashids.decrypt(hashid)
    return id

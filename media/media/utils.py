from hashids import Hashids

hashids = Hashids()

def create_hashid(id):
    hashid = hashids.encode(id);
    return hashid

def decode_hashid(hashid):
    id = hashids.decode(hashid)
    return id

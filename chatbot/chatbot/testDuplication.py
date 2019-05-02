# test if there's duplication with current hashids
# from 1 - 2000 000 000
# according to user_id creation logic:
#   int((floor(get_activities()['user_id'].dropna().max()/1e6) + 1) *1e6 + randint(1,999999))

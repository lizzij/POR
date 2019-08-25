import random
from random import choice

treatment_dict = {'TNO':10, 'TNN':10, 'TRO':10, 'TRN':10}
def random_treatment():
    treatment, num_left = random.choice(list(treatment_dict.items()))
    num_left = num_left - 1
    treatment_dict.update( {treatment : num_left})
    if num_left == 0:
        del treatment_dict[treatment]
    return treatment

for i in range(0, 40):
    test = random_treatment()
    print(test)

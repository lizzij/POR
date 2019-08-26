# Random treatment sequence generation

import random
import pandas as pd

random.seed(2625224) # 08/22/2019 Dow Jones Index Close Price X 100

i, satisfied, mini, mini_best = (1, False, [50,50,50,50,50], [50,50,50,50,50])
tolerance = 2 # 1 is not reached even after 10 minutes, which makes randomization inference too taxing. 2 takes 20 seconds

while not(satisfied):
	seq = random.choices([0,1,2,3],k=200)
	for j in range(5):
		k = [40,80,120,160,200][j]
		vk = pd.DataFrame(seq[0:k])[0].value_counts()
		mini[j] = int(max(abs(max(vk)-k/4),abs(min(vk)-k/4)))
	if max(mini) < max(mini_best): mini_best = list(mini)
	if i%1000 == 0:
		print(str(i)+" iterations complete, best so far: "+str(mini_best))
	if max(mini) <= tolerance:
		satisfied = True
		print(str(i)+" iterations complete, best so far: "+str(mini_best))
	i = i + 1

## Verification
for j in range(5):
	k = [40,80,120,160,200][j]
	print(pd.DataFrame(seq[0:k])[0].value_counts())

## Print sequence
print(seq)

############
## ARCHIVE##
############

## Assign treament group, 50 people each
## Note:    no consensus in economics how one should do this sequential assignment
##          given this, a sensible choice is keep randomizing until I reach reasonable balance
##          Leave this function here, but we're actually not using it
##          literature in statistics:
##              Efron's biased coin: https://www.sciencedirect.com/science/article/pii/S0378375805001874
##              Antognini and Giovgnoli's adaptive design: https://rss.onlinelibrary.wiley.com/doi/pdf/10.1111/j.1467-9876.2004.00436.x
# def random_treatment(users):
#     treatment_goal = {'T1':50, 'T2':50, 'T3':50, 'T4':50}
#     if len(users) == 0: treatment_choices_left = list(treatment_goal.keys())
#     else:
#         curr_treatment_count = users['treatment'].value_counts()
#         treatment_choices_left = []
#         for treatment in treatment_goal.keys():
#             if curr_treatment_count.get(treatment) == None: treatment_choices_left.append(treatment)
#             elif treatment_goal.get(treatment) > curr_treatment_count.get(treatment): treatment_choices_left.append(treatment)
#     treatment = random.choice(treatment_choices_left)
#     return treatment
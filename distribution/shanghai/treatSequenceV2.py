# Random treatment sequence generation
# Prepared for second pilot in Shanghai (200 subjects)

import random
import pandas as pd

random.seed(2634601) # 10/09/2019 Dow Jones Index Close Price X 100

i, satisfied, mini, mini_best = (1, False, [50,50,50], [50,50,50])
tolerance_max = 3

while not(satisfied):
	seq = random.choices([0,1,2,3,4],k=240)
	for j in range(3):
		k = [80,160,240][j]
		vk = pd.DataFrame(seq[0:k])[0].value_counts()
		mini[j] = int(abs(max(vk)-min(vk)))
	if max(mini) < max(mini_best): mini_best = list(mini)
	if i%1000 == 0:
		print(str(i)+" iterations complete, best so far: "+str(mini_best))
	if max(mini) <= tolerance_max:
		satisfied = True
		print(str(i)+" iterations complete, best so far: "+str(mini_best))
	i = i + 1

## Verification
for j in range(3):
	k = [80,160,240][j]
	print(pd.DataFrame(seq[0:k])[0].value_counts())

## Print sequence
seq_fin = [2,1,0,3] # First four = test IDs (DJ,JB,EH,NQ) (T2-1, T1, T0, T2-2) (surveyor 3, 1, 1, 2)
seq_fin.extend(seq)
print(seq_fin)

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
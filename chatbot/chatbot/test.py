from random import randint, choices

treat_no = [1, 2, 3, 4, 5]
treat_prob = [0.2, 0.4, 0.6, 0.8, 1]
treatment = "T"+str(choices(treat_no, treat_prob)[0])
print("assigned treatment", treatment)

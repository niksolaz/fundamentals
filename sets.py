### SETS
college = set(['Bill', 'Katy', 'Verne', 'Dillon', 'Bruce', 'Olivia', 'Richard', 'Jim'])

coworker = set(['Aaron', 'Bill', 'Brandon', 'David', 'frank', 'Connie', 'Kyle', 'Olivia'])

family = set(['Garry', 'Landon', 'Larry', 'Mark', 'Olivia', 'Katy', 'Rae', 'Tom'])

print('############  SETS  ############')
print(college)
print(coworker)
print(family)
print('################################')

### UNION
local_union = college.union(coworker, family)
print('###########  UNION  ############')
print(local_union)
print('################################')

### INTERSECTION
local_intersection1 = college.intersection(coworker)
local_intersection2 = college.intersection(family)
local_intersection3 = coworker.intersection(family)
print('######  INTERSECTION  ##########')
print(local_intersection1)
print(local_intersection2)
print(local_intersection3)
print('################################')

### DIFFERENCE
local_difference1 = college.difference(coworker)
local_difference2 = college.difference(family)
local_difference3 = coworker.difference(family)
print('######  DIFFERENCE  ############')
print(local_difference1)
print(local_difference2)
print(local_difference3)
print('################################')
### SYMMETRIC DIFFERENCE
local_symmetric_difference1 = college.symmetric_difference(coworker)
local_symmetric_difference2 = college.symmetric_difference(family)
local_symmetric_difference3 = coworker.symmetric_difference(family)
print('#### SYMMETRIC DIFFERENCE  #####')
print(local_symmetric_difference1)
print(local_symmetric_difference2)
print(local_symmetric_difference3)
print('################################')
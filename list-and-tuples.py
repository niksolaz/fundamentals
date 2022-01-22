row = ['Ford', 'Audi', 'BMW', 'Lexus']

# append Mercedes as last item
row.append('Mercedes')

# insert Kia at index 0
row.insert(0,'Kia')

# find specific index with item
row.index('Mercedes')

# find specific item with index and remove
row.pop(5)

# change value of the item at the specific index
row[3] = 'Toyota'

# remove specific item
row.remove('Lexus')

box = [
    ['a1', 'a2', 'a3', 'a4'],
    ['b1', 'b2', 'b3', 'b4'],
    ['c1', 'c2', 'c3', 'c4'],
    ['d1', 'd2', 'd3', 'd4']
]
box_2 = {
    'a': ['1', '2', '3', '4'],
    'b': ['1', '2', '3', '4'],
    'c': ['1', '2', '3', '4'],
    'd': ['1', '2', '3', '4']
}
# Tuple is immutable
box_3 = (
   ['a1', 'a2', 'a3', 'a4'],
    ['b1', 'b2', 'b3', 'b4'],
    ['c1', 'c2', 'c3', 'c4'],
    ['d1', 'd2', 'd3', 'd4']
)
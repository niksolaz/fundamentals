""" A Functional Breakfast """

cheese = 'Cheddar'
def mix_and_cook():
    print('Mixing the ingredients')
    print('Pouring the mixture into a frying pan')
    print('Cooking the first side')
    print('Flipping it!')
    print('Cooking the other side!')
def make_omelette():
    mix_and_cook()
    cheese = 'Swiss'
    omelette = 'a {} omelette'.format(cheese)
    return omelette
def make_pancake():
    mix_and_cook()
    pancake = 'delicious {} pancake'.format(cheese)
    return pancake
def make_fancy(*ingredients):
    fancy = 'fancy have {} ingredients'.format(len(ingredients))
    return fancy

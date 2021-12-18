from random import randint
index = 1
def valutaValore(index) :
    valore = input("digit number between 1 to 6: ")
    value = randint(1, 6)
    print("your value is: ", valore)
    print('My value is: ', value)
    if int(valore) == value:
        print('Yes, You win!!!,  Good!!!!')
        print('You are played tot : ', index)
        exit()
    else: 
        index = index + 1
        print('No, You Loose!!!, Please Repeat!')
        valutaValore(index)
valutaValore(index)

def deviceOpen(value):
    return value

water = deviceOpen('water')
print(water)
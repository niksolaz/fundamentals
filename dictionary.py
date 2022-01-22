from asyncio.windows_events import NULL


rolodex = {
    "Nicola": 3494633449,
    "Monica": 3401190111,
    "Michele": 3653434867,
    "Paolo": 3975397345,
    "Anna": 3346293723,
    "Maria": 3331231234,
    "Domenico": 3220984561,
    "David": 3990002348,
    "Adriana":3331238763
}

def search_name(name):
    if name in rolodex:
        print(rolodex[name])
    else:
        create = input("Do you want create? (yes/no): ")
        if create == 'yes':
            num = input("Insert Number: ")
            rolodex[name] = num
            print('Ok,' + format(name) + ' create')
            print(rolodex[name])
        else:
            print('Ok,' + format(name) + ' not create')


def caller_id(look_num):
    for name, num in rolodex.items():
        if num == str(look_num):
            print(name)
# lists = [
#     'Tokyo',
#     'Amsterdam',
#     'Venezia',
#     'Lisbona',
#     'Dublino'
# ]

# for x in range(0, len(lists)):
#     if lists[x] == 'Tokyo':
#         print('la capitale del Giappone e ', lists[x])
#     elif lists[x] == 'Amsterdam':
#         print('la capitale dell\'Olanda e ', lists[x])
#     elif lists[x] == 'Venezia':
#         print('la capitale d\'Italia non e ', lists[x])
#     elif lists[x] == 'Lisbona':
#         print('la capitale del Portogallo non e ', lists[x])
#     elif lists[x] == 'Dublino':
#         print('la capitale dell\' Irlanda e ', lists[x])

# dictionaries = {
#     'nicola': {
#         'email': 'nicola@test.com',
#         'phone': 3334443434,
#         'city': 'Bari',
#         'country': 'Italy',
#         'hobby': ['Manga', 'Disegno', 'Python']
#     },
#     'monica': {
#         'email': 'monica@test.com',
#         'phone': 3101234567,
#         'city': 'Asti',
#         'country': 'Italy',
#         'hobby': ['Cucina', 'Trekking', 'Montagna']
#     },
# }
# dictionaries['monica']['info'] = 'mi piace il trentino'
# print(dictionaries['monica'])

numbers = [1,2,3,4,5,6,7,8,9,10]

for number in numbers:
    for i in numbers:
        print(i," * ",number," = ",i * number)
    print("------------------")
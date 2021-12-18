# import re

# value = input('Get your number: ')
# print(value * 10)
# print(int(value) * 10)


# text = 'hello world'
# print(text.capitalize())

# regular expression Regex
# five_digit_zip = '98101'
# nine_digit_zip = '98101-0003'
# phone_number = '234-567-8901'
# name_in_number = '234-567-8901 nicola 234-567-8901'

# five_digit_expression = r'\d{3}'
# name_digit_expression = r'\w{6}'

# print(re.search(five_digit_expression, five_digit_zip))
# print(re.search(five_digit_expression, nine_digit_zip))
# print(re.search(five_digit_expression, phone_number))
# print(re.search(name_digit_expression, name_in_number))

miles = input('Enter a distance in miles: ')
# 1 mile = 1,60934 km
convert_miles_to_km = float(miles) * 1.60934
print(convert_miles_to_km)
    

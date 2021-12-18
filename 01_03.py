message = "This is going to be tricky ;)"
Message = "Very tricky!"
print(message)

result = 2**3
print("2**3 = ", result)
result = 5 - 3
print("5 - 3 = ", result)

def valueAge():
    age = input("What is your age? ")
    try: 
        if int(age) < 18:
            print("you are much young", age)
        elif int(age) >= 18:
            print("you are much old", age)
        exit()
    except ValueError:
        print("This is not number!!!! Insert number from 0 to 100")
        valueAge()

valueAge()


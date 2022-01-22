
class Vehicle: # Base Vehicle class
    def __init__(self, color, manufact):
        self.color = color
        self.manufact = manufact
        self.gas = 4 # a full tank of gas
        self.charge = 3 # a full charge of electrical

    def drive(self):
        if self.gas > 0:
            self.gas -= 1
            print('The {} {} goes Vrooom!!!'.format(self.color, self.manufact))
        else:
            print('The {} {} sputters out of gas'.format(self.color, self.manufact))

    def get_gas(self, qty):
        self.qty = qty
        if qty >= 4:
            print('Ok it is full of gas!!!')
            self.gas = 4
        else:
            print('You can to start!')
            self.gas = int(qty)

class Car(Vehicle): # Inherits from Vehicle class

    # turn the radio on
    def radio(self):
        print("Rockin' Tunes")
        
    # open the window
    def window(self):
        print("Ahhh.... fresh air!")

class Motorcycle(Vehicle): # Inherits from Vehicle class

    # put on helemet 
    def helmet(self):
        print('Nice and safe!')

class ECar(Car): # Inherits from Car class

    def drive(self):
        if self.charge > 0:
            self.charge -= 1
            print('The {} {} goes Sssshhhhh!!!'.format(self.color, self.manufact))
        else:
            print('The {} {} sputters out of electrical charge'.format(self.color, self.manufact))

    def is_charge(self, time):
        self.time = time
        if time >= 3:
            print('Ok it is full charge!!!')
            self.charge = 3
        else:
            print('You can to start!')
            self.charge = int(time)
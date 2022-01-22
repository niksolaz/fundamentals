class Attendee:
    
    def __init__(self, name, ticket):
        self.name = name
        self.ticket = ticket

    def displayAttendee(self):
        print('Name : {}, Ticket : {}'.format(self.name, self.ticket))
    
    def addTicket(self):
        self.ticket += 1
        print('{} tickets increades to {}'.format(self.name, self.ticket))
    
attendee1 = Attendee('M. Villani', 2)
attendee2 = Attendee('N. Solazzo', 1)

attendee2.addTicket()
attendee2.addTicket()

attendee1.displayAttendee()
attendee2.displayAttendee()
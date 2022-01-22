class Attendee {
    constructor(name, ticket) {
        this.name = name;
        this.ticket = ticket;
    }
    displayAttendee() {
        console.log(`Name : ${this.name}, Ticket : ${this.ticket}`)
    }
    addTicket() {
        this.ticket += 1
        console.log(`${this.name} tickets increades to ${this.ticket}`)
    }
}

const attendee1 = new Attendee('M. Villani', 2)
const attendee2 = new Attendee('N. Solazzo', 1)

attendee2.addTicket()
attendee2.addTicket()

attendee1.displayAttendee()
attendee2.displayAttendee()

attendee2.responseTicket = function(){
    console.log(`This is response of my ticket: ${this.ticket}`)
}

attendee1.secondName = 'M. Ferguson'
attendee1.displayAttendeeNewName = function() {
    console.log(`Name : ${this.secondName}, Ticket : ${this.ticket}`)
}

attendee1.displayAttendeeNewName()
attendee2.responseTicket()
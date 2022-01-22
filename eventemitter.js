const EventEmitter = require('events');
const myEmit = new EventEmitter();
// create object Food
const Food = function() {
    return {
        fisrt: () => {
            console.log('Fisrt');
        },
        
        second: () => {
            console.log('Second');
        },
        
        third:() => {
            console.log('Third');
        },
    }
}
// create istance food of Food
const food = new Food()
// Listener
myEmit.on('event', (arg) => {
    if(arg !== null && arg !== undefined) {
        if (arg === 1) {
            food.fisrt()
        } else if (arg === 2) {
            food.second()
        } else if (arg === 3) {
            food.third()
        } else {
            console.log('Fuori portata menu')
        } 
    } else {
        console.log('Nessun piatto scelto')
    }
});

console.log(myEmit.listeners('event'));

myEmit.emit('event', 4);
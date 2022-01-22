var rl = require('readline-sync');

const pizza = {
    lunedi: 'al formaggio',
    martedi: 'ai peperoni',
    mercoledi: 'al tonno',
    giovedi: 'alla salsiccia',
    venerdi: 'al salame',
    sabato: 'alle verdure',
    domenica: 'al pomodoro e mozzarella'
};
function getPizza() {
    return pizza
}
function question() {
    let arr = getPizza();
    let day = rl.question('scegli un giorno della settimana: ');
    let value = arr[day.toLowerCase()];
    return value;
}
function chooseDayPizza(cb) {
    let value = cb;
    if(value !== undefined) {
        console.log('voglio una pizza ' + value);
        return true;
    } else {
        console.log('non esiste questa pizza');
        return false;
    }
}

let start = 0;
while(start < 5) {
    if(chooseDayPizza(question())) {
        start = 5;
    } else {
        start += 1;
    }
}

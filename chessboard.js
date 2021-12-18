// arr = ['Adam', 'Alex', 'Mark', 'Frank', 'Alice', 'Alicia', 'Ben'];

// const getNames = arr.filter(name => {
//     if(name.indexOf('A') === 0 || name.indexOf('a') === 0) {
//         return name
//     }
// })
// console.log(getNames);
var index = 1
function valutaValore() {
    var valore = prompt("digit number between 1 to 6: ")
    var value = Math.floor(Math.random(1,6) * 10)
    console.log("your value is: ", valore)
    console.log('My value is: ', value)
    if (parseInt(valore) == value) {
        console.log('Yes, You win!!!,  Good!!!!')
        console.log('You are played tot : ', index)
        return
    } else {
        index++
        console.log('No, You Loose!!!, Please Repeat!')
        valutaValore()
    }
}
valutaValore()
const Task  = require('./task')


var result = {
    data: null,
    getTask: function(name, amount) {
        Task.listWallet(name, amount) 
        return Task.getWallet();
    },
    getListFakeData: function(arr) {
        arr.map(t => {
            result.data = result.getTask(t.name, t.amount)
        })
    }
}

var fakeData = [
    {
        name: 'Nicola',
        amount: 999
    },
    {
        name: 'Domenico',
        amount: 354
    },
    {
        name: 'David',
        amount: 801
    },
    {
        name: 'Monica',
        amount:990
    },
    {
        name: 'Magda',
        amount: 101
    },
    {
        name: 'Anna',
        amount: 600
    },
    {
        name: 'Tovel',
        amount: 666
    },
    {
        name: 'Milo',
        amount: 476
    },
    {
        name: 'Mauro',
        amount: 676
    },
    {
        name: 'Adriana',
        amount: 222
    },
];

result.getListFakeData(fakeData)

console.log(result);


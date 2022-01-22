const Wallet = require('./wallet')

var Task = function() {
    return {
        createWallet(name, amount) {
            Wallet.info.name = name;
            Wallet.info.amount = amount;
            var active = amount > 500 ? true : false;
            return {
                name: Wallet.info.name,
                amount: Wallet.info.amount,
                isActive: active
            }
        },
        listWallet(name, amount) {
            var obj = this.createWallet(name, amount)
            Wallet.basic.push(obj)
        },
        getWallet() {
            return Wallet.basic
        }
    }
}()



module.exports = Task;
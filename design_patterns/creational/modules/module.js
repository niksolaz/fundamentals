var Module = {
    name: 'Nicola',
    getName: function() {
        return `my name is ${this.name}`;
    },
    setName: function(newname) {
        this.name = newname;
        return this.name;
    }
}

console.log(Module.name)
console.log(Module.getName())
console.log(Module.setName('Monica'))
console.log(Module.name)
console.log(Module.getName())
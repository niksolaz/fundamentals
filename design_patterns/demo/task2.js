var task = {
    title: 'My task',
    description: 'My description'
}
Object.defineProperty(task, 'toString', {
    value: function() {
        return `${this.title} : ${this.description}`
    },
    writable: false,
    enumerable: false,
    configurable: false
})

// Inheritance
var urgentTask = Object.create(task);
urgentTask.title = 'My Urgent'
Object.defineProperty(urgentTask, 'toString', {
    value: function() {
        return `${this.title} : Urgent task`
    },
    writable: false,
    enumerable: true,
    configurable: false
})
console.log(task);
console.log(urgentTask);
console.log(urgentTask.toString());
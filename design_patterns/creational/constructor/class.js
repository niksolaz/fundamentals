'use strict'

class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }
    complete() {
        this.completed = true;
        console.log('Completed task: ', this.name);
    }
    save() {
        console.log('Saving task: ', this.name);
    }
}

module.exports = Task
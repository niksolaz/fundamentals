'use strict'
var Repo = require('./taskRepository');

class Task {
    constructor(data) {
        this.name = data.name;
        this.completed = false;
    }
    complete() {
        this.completed = true;
        console.log('Completed task: ',this.name);
    }
    save() {
        console.log('Saving task: ', this.name);
        Repo.save(this);
    }
}

module.exports = Task
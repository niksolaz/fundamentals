var Repo = require('./taskRepository');

var Task = function(data) {
    this.name = data.name;
    this.completed = false;
}

Task.prototype.complete = function() {
    this.completed = true;
    console.log('Completed task: ', this.name);
}
Task.prototype.save = function() {
    console.log('Saving task: ', this.name);
    Repo.save(this);
}


module.exports = Task
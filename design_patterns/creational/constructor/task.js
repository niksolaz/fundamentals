var Task = function(name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function() {
    this.completed = true;
    console.log('Completed task: ', this.name);
}
Task.prototype.save = function() {
    console.log('Saving task: ', this.name);
}


module.exports = Task
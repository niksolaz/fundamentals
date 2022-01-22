var Task = require('../task');

var UrgentTask = function (name, priority) {
    Task.call(this, name)
    this.priority = priority;
}

UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function () {
    console.log('notifying important people');
}

UrgentTask.prototype.save = function () {
    this.notify();
    console.log('do special stuff before saving');
    Task.prototype.save.call(this);
}
var ut = new UrgentTask('This is urgent', 3);
console.log(`Priority: ${ut.priority}`)
ut.complete();
ut.save();
console.log(ut);
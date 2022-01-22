var Task = require('./task');

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var myUrgentTask = new Task('Urgent Task');
myUrgentTask.priority = 2;
myUrgentTask.notify = function () {
  console.log('notifying important people');
}

myUrgentTask.save = function () {
  this.notify();
  Task.prototype.save.call(this);
}
console.log(`Priority: ${myUrgentTask.priority}`)
myUrgentTask.complete();
myUrgentTask.save();
// var Task = require('./task')
var Task = require('./class')
var Repo = require('./taskRepository')

var task1 = new Task(Repo.get(123));
var task2 = new Task({name: 'create task modules'});
var task3 = new Task({name: 'create task prototypes'});
var task4 = new Task({name: 'create task singleton'});

task1.complete();
task2.save();
task3.save();
task4.save();
// var Task = require('./task')
var Task = require('./class')

var task1 = new Task('create task constructor');
var task2 = new Task('create task modules');
var task3 = new Task('create task prototypes');
var task4 = new Task('create task singleton');

task1.complete();
task2.save();
task3.save();
task4.save();
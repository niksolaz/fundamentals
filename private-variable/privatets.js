"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.sayHello = function () {
        console.log("Hello, my name is ".concat(this.firstName, " ").concat(this.lastName, "!"));
    };
    Person.prototype.addOneYear = function () {
        this._age = this._age + 1;
    };
    return Person;
}());
exports.Person = Person;
var cory = new Person('Cory', 'Rylan', 100);
cory.addOneYear();
console.log(cory.age);
//   cory._age = 200;
//   console.log(cory._age);
//   cory.age = 200;

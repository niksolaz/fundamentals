export class Person {
	firstName: string
	lastName: string
	private _age: number

	get age() {
		return this._age
	}

	constructor(firstName: string, lastName: string, age: number) {
		this.firstName = firstName
		this.lastName = lastName
		this._age = age
	}

	sayHello() {
		console.log(`Hello, my name is ${this.firstName} ${this.lastName}!`)
	}

	addOneYear() {
		this._age = this._age + 1
	}
}

const cory = new Person('Cory', 'Rylan', 100)
cory.addOneYear()
console.log(cory.age)

//   cory._age = 200;
//   console.log(cory._age);
//   cory.age = 200;

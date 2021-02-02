'use strict';

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this -> creates a copy of this for each instance (Poor Performace!!!)
//   // This would not happen in typical Classes
//   // this.calcAge = function () {
//   // console.log(2037 - this.birthYear);
//   // };
// };

// const tiago = new Person('Tiago', 1993);
// console.log(tiago);

// // HOW TO CREATE A CLASS
// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// // const jay = 'Jay';
// // console.log(jay instanceof Person);
// console.log(tiago instanceof Person);

// Person.hey = function () {
//   console.log('Hey there 👋');
//   console.log(this);
// };

// Person.hey();
// tiago.hey(); // Won't work

// // Prototypes
// // console.log(Person.prototype.calcAge);
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// tiago.calcAge();
// matilda.calcAge();
// jack.calcAge();

// console.log(tiago.__proto__);
// console.log(tiago.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(tiago));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// console.log(tiago.species, matilda.species);

// console.log(tiago.hasOwnProperty('firstName'));
// console.log(tiago.hasOwnProperty('species'));

// console.log(tiago.__proto__); // PROTOTYPE OF TIAGO AKA CLASS PERSON
// // Object .prototype (top of prototype chain)
// console.log(tiago.__proto__.__proto__); // OBJECT
// console.log(tiago.__proto__.__proto__.__proto__); // NULL

// console.log(Person.prototype.constructor);

// const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique()); // we added a new property to the array constructor

// const h1 = document.querySelector('h1');
// console.log(x => x + 1);

// CHALLENGE #1
/* const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`'${this.make}' going at ${this.speed} hm/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`'${this.make}' going at ${this.speed} hm/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.brake();

// mercedes.accelerate();
// mercedes.brake();
// bmw.accelerate();

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
 */

// some little tests that I did
// const Person = function (firstName, lastName, birthDay, birthMonth, birthYear) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthYear = birthYear;
//   this.birthMonth = --birthMonth;
//   this.birthDay = birthDay;
// };

// const tiago = new Person('Tiago', 'Ribeiro', 20, 9, 1993);
// Person.prototype.calcAge = function () {
//   const date = new Date();
//   const birthdate = new Date(this.birthYear, this.birthMonth, this.birthDay);
//   const age = Math.trunc((date - birthdate) / (1000 * 3600 * 24 * 365));
//   console.log(`${this.firstName}'s current age is ${age}`);
//   return age;
// };
// console.log(Person);
// console.log(tiago);
// console.log(Person.prototype);
// console.log(Person.__proto__.__proto__.__proto__);
// console.log(tiago.calcAge());

// ES6 Classes - it's just syntax sugar...
// class expression
// const PersonCl = class {};

// class declaration

/* 
  class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

// GETTERS AND SETTERS
const account = {
  owner: 'tiago',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // we write it as if it was just a property

account.latest = 50;

console.log(account.movements);
 */

/* const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(PersonProto);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge(); */

// CHALLENGE #2
/* class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`'${this.make}' going at ${this.speed} hm/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`'${this.make}' going at ${this.speed} hm/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const bmw = new CarCl('BMW', 120);
const mercedes = new CarCl('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();
console.log(bmw.speedUS);
bmw.speedUS = 200;
console.log(bmw.speed);

mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.brake();
console.log(mercedes.speedUS);
mercedes.speedUS = 220;
console.log(mercedes.speed);

const ford = new CarCl('Ford', 120);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = 180;
console.log(ford.speed);
 */

// Inheritance Between "Classes": Constructor Functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

/* 
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
// Student.prototype = Person.prototype;
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
const tom = new Person('Tom', 2018, 'Biology');
// console.log(Person.prototype);
// console.log(mike);
mike.introduce();
mike.calcAge();

tom.calcAge();
// console.log(tom.__proto__);
// tom.introduce();
// console.log(mike);
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object)

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor); 
*/

// CHALLENGE #3
/* 
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} hm/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} hm/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

const zoe = new EV('Zoe', 80, 50);
zoe.chargeBattery(90);
console.log(zoe);
zoe.accelerate();
zoe.brake();
 */

// Inheritance Between "Classes": ES6 Classes
/* class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    // console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
 */

// Inheritance Between "Classes": Object.create

/* const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
 */

/* class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    // Protected property
    this._movements = []; // The underscore indicates that it should not be accessed from the outside
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdrawal(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}

const acc1 = new Account('Tiago', 'EUR', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
// console.log(acc1.pin);
 */

// NOT RELEASED!!! -> CODE WILL NOT WORK
// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

/* class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    // this._movements = []; // The underscore indicates that it should not be accessed from the outside
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdrawal(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Tiago', 'EUR', 1111);
console.log(acc1.#movements);
console.log(acc1.#pin);
console.log(acc1.#approveLoan(100));
Account.helper();
 */

// CHAINING
/* class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    // Protected property
    this._movements = []; // The underscore indicates that it should not be accessed from the outside
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
    return this;
  }

  withdrawal(val) {
    this.deposit(-val);
    return this;
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
    return this;
  }
}

const acc1 = new Account('Tiago', 'EUR', 1111);

acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);

acc1
  .deposit(300)
  .deposit(500)
  .withdrawal(35)
  .requestLoan(25000)
  .withdrawal(4000);
console.log(acc1.getMovements()); */

// CHALLENGE #4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} hm/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} hm/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const bmw = new CarCl('BMW', 120);
bmw.accelerate();
bmw.brake();

class EVCl extends CarCl {
  constructor(make, speed, charge) {
    super(make, speed);
    this._charge = charge;
  }

  chargeBattery(chargeTo) {
    this._charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this._charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${this._charge}%`
    );
    return this;
  }
}

const tesla = new EVCl('Tesla', 120, 80);
tesla.accelerate();

const rivian = new EVCl('Rivian', 100, 24);
rivian
  .accelerate()
  .brake()
  .brake()
  .brake()
  .accelerate()
  .chargeBattery(88)
  .accelerate()
  .brake();

const rivianNew = new EVCl('Rivian', 120, 23);
rivianNew
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivianNew.speedUS);

'use strict';

/* const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this -> creates a copy of this for each instance (Poor Performace!!!)
  // This would not happen in typical Classes
  // this.calcAge = function () {
  // console.log(2037 - this.birthYear);
  // };
};

const tiago = new Person('Tiago', 1993);
console.log(tiago);

// HOW TO CREATE A CLASS
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

// const jay = 'Jay';
// console.log(jay instanceof Person);
console.log(tiago instanceof Person);

// Prototypes
// console.log(Person.prototype.calcAge);
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

tiago.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(tiago.__proto__);
console.log(tiago.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(tiago));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(tiago.species, matilda.species);

console.log(tiago.hasOwnProperty('firstName'));
console.log(tiago.hasOwnProperty('species'));

console.log(tiago.__proto__); // PROTOTYPE OF TIAGO AKA CLASS PERSON
// Object .prototype (top of prototype chain)
console.log(tiago.__proto__.__proto__); // OBJECT
console.log(tiago.__proto__.__proto__.__proto__); // NULL

console.log(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); // we added a new property to the array constructor

const h1 = document.querySelector('h1');
console.log(x => x + 1); */

// CHALLENGE #1
const Car = function (make, speed) {
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

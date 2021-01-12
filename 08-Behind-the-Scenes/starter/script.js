'use strict';

/* function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age} years old, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      // output = 'NEW OUTPUT!';
      // const output = 'NEW OUTPUT!'; --> this would be an entirely different variable
    }
    console.log(millenial); // This is a function scope variable. Here we are in a different block-scope, however we're in the same function 'printAge'
    // console.log(add(2, 3)); --> works when disabling strict mode
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Tiago';
calcAge(1993); */

/* // Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Tiago';
let job = 'tester';
const year = 1993;

// Functions
console.log(addDecl(2, 3));
// console.log(addExp(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts); // undefined is a falsy value!!!
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z); */

/* console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1993);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1993);

const tiago = {
  year: 1993,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
tiago.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = tiago.calcAge;
matilda.calcAge();

const f = tiago.calcAge;
f(); // Not attached to any object!
 */

//var firstName = 'Matilda';

/* const tiago = {
  firstName: 'Tiago',
  year: 1993,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // solution to the JS "bug"
    // const isMillenial = function () {
    //   console.log(self); // 'this' is inside a regular function expression
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2: Arrow function does not have its own "this" keyword. Uses the "this" keyword of the parent's scope
    const isMillenial = () => {
      console.log(this); // 'this' is inside a regular function expression
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
tiago.greet();
tiago.calcAge();

// Arguments keywords
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  // console.log(arguments);
  return a + b;
};
// addArrow(2, 5, 8); // arguments keyword does not exist in arrow functions
 */

/* let age = 27;
let oldAge = age;
age = 28;
console.log(age);
console.log(oldAge);

const me = {
  name: 'tiago',
  age: 27,
};

const friend = me;
friend.age = 29;
console.log('Friend:', friend);
console.log('Me:', me);

// Object is a reference type
 */

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = { firstName: 'Jessica', lastName: 'Williams', age: 27 };

const marriedJessica = jessica; // The value in the stack does not change!!!
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {}; // This WON'T work. Only if 'let' was used instead of 'const'

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

//SHALLOW COPY!!!

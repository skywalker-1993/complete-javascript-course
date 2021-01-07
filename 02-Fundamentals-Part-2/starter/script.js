'use strict';

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534; */

// FUNCTIONS
/* function logger() {
  console.log('My name is Tiago');
}

// calling / running / invoking function
console.log(logger());
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); */

// FUNCTIONS DECLARATIONS VS EXPRESSIONS
/* 
// Function declaration
const age1 = calcAge1(1991);
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

//const age1 = calcAge1(1991);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991); // CANNOT BE BEFORE INITIALIZATION

console.log(age1, age2);

console.log(`${calcAge2(1993)}`); */

// ARROW FUNCTIONS
/* const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(1993, 'Tiago'));
console.log(yearsUntilRetirement(1991, 'Joe')); */

// FUNCTIONS CALLING OTHER FUNCTIONS
/* function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3)); */

// REVIEWING FUNCTIONS
/*const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🥳`);
    return -1;
  }

  //return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(1993, 'Tiago'));
console.log(yearsUntilRetirement(1970, 'Joe'));*/

// INTRODUCTION TO ARRAYS
/* const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const year = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']; // This we CANNOT do

const tiago = ['Tiago', 'Ribeiro', 2037 - 1993, 'tester', friends];
console.log(tiago);
console.log(tiago.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
 */

// BASIC ARRAY OPERATIONS (METHODS)
/* const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23')); // Uses strict equality

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
 */

// INTRODUCTION TO OBJECTS
/* const tiago = {
  firstName: 'Tiago',
  lastName: 'Ribeiro',
  age: 2037 - 1993,
  job: 'tester',
  friends: ['Michael', 'Peter', 'Steven'],
};

console.log(tiago);
 */

// DOT VS BRACKET NOTATION
/* const tiago = {
  firstName: 'Tiago',
  lastName: 'Ribeiro',
  age: 2037 - 1993,
  job: 'tester',
  friends: ['Michael', 'Peter', 'Steven'],
};

console.log(tiago);

console.log(tiago.lastName);
console.log(tiago['lastName']);

const nameKey = 'Name';
console.log(tiago['first' + nameKey]);
console.log(tiago['last' + nameKey]);

// console.log(tiago.'last' + nameKey); // This does NOT work

const interestedIn = prompt(
  'What do you want to know about Tiago? Choose between firstName, lastName, age, job and friends'
);
// console.log(tiago[interestedIn]);

if (tiago[interestedIn]) {
  console.log(tiago[interestedIn]);
} else {
  console.log(
    'Wrong request! Choose between firstName, lastName, age, job and friends'
  );
}

tiago.location = 'Portugal';
tiago['twitter'] = '@anakin_skywalker';
console.log(tiago);

// Challenge
console.log(
  `${tiago.firstName} has ${tiago.friends.length} friends, and his best friend is called ${tiago.friends[0]}`
); */

// OBJECT METHODS
const tiago = {
  firstName: 'Tiago',
  lastName: 'Ribeiro',
  birthYear: 1993,
  job: 'tester',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  //   calcAge: function () {
  //     console.log(this);
  //     return 2037 - this.birthYear;
  //   },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he ${
      this.hasDriversLicense ? 'has' : 'does not have'
    } a driver's license`;
  },
};

console.log(tiago.calcAge());
console.log(tiago.age);

// Challenge
console.log(tiago.getSummary());

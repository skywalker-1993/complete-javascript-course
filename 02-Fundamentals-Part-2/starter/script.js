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

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement}`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🥳`);
    return -1;
  }

  //return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(1993, 'Tiago'));
console.log(yearsUntilRetirement(1970, 'Joe'));

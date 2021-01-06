/*
//let js = 'amazing';
//if (js === 'amazing') alert ('JavaScript is FUN!');
//40 + 8 + 23 - 10;
//console.log(40 + 8 + 23 - 10);

//console.log('Tiago');
//console.log(27);

// let firstName = 'Tiago';
// console.log(firstName);

// let $function = 27;
// console.log($function)

// let myFavoriteMovie = 'Star Wars'
// alert('Star Wars')

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1993;
console.log(year);
console.log(typeof year);

year = null;
console.log(year);
console.log(typeof year);
*/

// let age = 30;
// age = 31;

// console.log(age);

// const birthYear = 1991; // Immutable variable
// birthYear = 1990;

// const job; // Must be initialized

/* var job = 'programmer';
job = 'teacher';

lastName = 'Ribeiro'; // ALWAYS DECLARE VARIABLES!!
console.log(lastName);*/

/* const now = 2037;
const ageTiago = now - 1993;
const ageAna = now - 1991;
console.log(ageTiago, ageAna);

console.log(ageTiago * 2, ageTiago / 10, 2 ** 3);
// 2 to the power of 3 -> 2**3 = 2*2*2

const firstName = "Tiago";
const lastName = "Ribeiro";

console.log(firstName + " " + lastName); */

// Assignment Operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10
// x *= 4; // x = x * 4
// x++; // x = x + 1
// x--; // x = x - 1
// x--;
// console.log(x);

// Comparison Operators
/*console.log(ageTiago < ageAna);
console.log(ageTiago > ageAna);
console.log(ageTiago >= 18);

const isFullAge = ageTiago >= 18;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageTiago + ageAna) / 2;
console.log(ageTiago, ageAna, averageAge);

const job = "Tester";
const birthYear = 1993;

const tiago = `I'm ${firstName}, a ${now - birthYear} year old ${job}!`;
console.log(tiago);*/

// IF/ELSE CONTROL STRUCTURE
/* const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Tiago can start driving license 🚘");
} else {
  const yearsLeft = 18 - age;
  console.log(`Tiago is too young. Wait another ${yearsLeft} years 😉`);
}

const birthYear = 1993;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);*/

/*
// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Tiago"));
console.log(typeof NaN); // Still a number, but an invalid one

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old"); // Cannot do this in Python!

console.log("23" - "10" - 3);
console.log("23" + "10" + 3); // All the number are converted into Strings!
console.log("23" * "2");
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1; // '11'
n = n - 1; // '10'
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");
*/

// 5 falsy values: 0, '', undefined, null, NaN
/* if (!NaN) {
  console.log("OK!");
}
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Tiago"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
} */

// Equality Operators
/*const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)'); // Strict Equal -> Does NOT do type coercion

if (age == 18) console.log('You just became an adult :D (loose)'); // Loose Equal -> DOES type coercion

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else if (favourite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?');
*/

// Logical Operators
/*const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (shouldDrive && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}*/

// SWITCH STATEMENT
/*const day = 'tuesday';

switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thurday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}*/

// CONDITIONAL (TERNARY) OPERATOR
const age = 27;
/* age >= 18
  ? console.log('I like to drink beer 🍺')
  : console.log('I like to drink water 💧'); */

const drink = age >= 18 ? 'beer 🍺' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'beer 🍺';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'beer 🍺' : 'water 💧'}`);

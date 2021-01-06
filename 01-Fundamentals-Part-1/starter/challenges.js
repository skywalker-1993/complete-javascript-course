// CHALLENGE #1
/*let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

let markBMI = weightMark / heightMark ** 2;
let johnBMI = weightJohn / heightJohn ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log("Mark's BMI = " + markBMI, "John's BMI = " + johnBMI);

console.log(markHigherBMI);

weightMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;

markBMI = weightMark / heightMark ** 2;
johnBMI = weightJohn / heightJohn ** 2;

markHigherBMI = markBMI > johnBMI;

console.log("Mark's BMI = " + markBMI, "John's BMI = " + johnBMI);

console.log(markHigherBMI);*/

// CHALLENGE #2
/*let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

let markBMI = weightMark / heightMark ** 2;
let johnBMI = weightJohn / heightJohn ** 2;

let markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

weightMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;

markBMI = weightMark / heightMark ** 2;
johnBMI = weightJohn / heightJohn ** 2;

markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}*/

// CHALLENGE #3
/*let scoreDolphins = 96 + 108 + 89;
let scoreKoalas = 88 + 91 + 110;
let avgDolphins = scoreDolphins / 3;
let avgKoalas = scoreKoalas / 3;

console.log(
  `Average Scores (Dolphins VS Koalas): ${avgDolphins} VS ${avgKoalas}`
);

if (avgDolphins > avgKoalas) {
  console.log('WINNER: Dophins!!!');
} else if (avgDolphins < avgKoalas) {
  console.log('WINNER: Koalas!!!');
} else {
  console.log('DRAW');
}

scoreDolphins = 97 + 112 + 101;
scoreKoalas = 109 + 95 + 123;
avgDolphins = scoreDolphins / 3;
avgKoalas = scoreKoalas / 3;

console.log(
  `Average Scores (Dolphins VS Koalas): ${avgDolphins} VS ${avgKoalas}`
);

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log('WINNER: Dophins!!!');
} else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
  console.log('WINNER: Koalas!!!');
} else {
  console.log('DRAW');
}

scoreDolphins = 97 + 112 + 101;
scoreKoalas = 109 + 95 + 106;
avgDolphins = scoreDolphins / 3;
avgKoalas = scoreKoalas / 3;

console.log(
  `Average Scores (Dolphins VS Koalas): ${avgDolphins} VS ${avgKoalas}`
);

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log('WINNER: Dophins!!!');
} else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
  console.log('WINNER: Koalas!!!');
} else if (
  avgDolphins === avgKoalas &&
  avgDolphins >= 100 &&
  avgKoalas >= 100
) {
  console.log('DRAW');
} else {
  console.log('No team wins the trophy :(');
}*/

// CHALLENGE #4
let bill, tip;
bill = 275;

tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

bill = 40;

tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

bill = 430;

tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

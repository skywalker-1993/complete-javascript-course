// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* const x = 23;
if (x === 23) console.log(23);
console.log(x); */

/* const calcAge = birthYear => 2037 - birthYear;

// BUG FIXME
// TODO
// LEC
// VIDEO

console.log(calcAge(1993));
console.log(calcAge(1977));
console.log(calcAge(1991));
console.log(calcAge(2000));
console.log(calcAge(2001));
console.log(calcAge(2005));
 */

// PROBLEM #1
/* const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let newTemps = [];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] === 'number') newTemps.push(temps[i]);
  }
  console.log(newTemps);
  const ampArray = [
    Math.min.apply(Math, newTemps),
    Math.max.apply(Math, newTemps),
  ];
  console.log(ampArray[1], ampArray[0]);
  return ampArray[1] - ampArray[0];
};

console.log(temperatures);
console.log(calcTempAmplitude(temperatures)); */

// PROBLEM #2
//const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

/* const calcTempAmplitudeNew = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  let newTemps = [];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] === 'number') newTemps.push(temps[i]);
  }
  console.log(newTemps);
  const ampArray = [
    Math.min.apply(Math, newTemps),
    Math.max.apply(Math, newTemps),
  ];
  console.log(ampArray[1], ampArray[0]);
  return ampArray[1] - ampArray[0];
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew); */

/* const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius:')),
  };
  console.table(measurement);
  // console.warn(measurement);
  // console.error(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
console.log(measureKelvin()); */

// CHALLENGE #1
const printForecast = function (arr) {
  let tempString = '...';
  for (let i = 0; i < arr.length; i++) {
    tempString += `${arr[i]}ºC in ${i + 1} days...`;
  }
  console.log(tempString);
};

const temperatures1 = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];

printForecast(temperatures1);
printForecast(temperatures2);

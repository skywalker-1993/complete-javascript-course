// CHALLENGE #1
/* const checkDogs = function (arr1, arr2) {
  const arr1New = arr1.slice();
  arr1New.splice(0, 1);
  arr1New.splice(-2);
  const bothArray = arr1New.concat(arr2);
  bothArray.forEach(function (dog, i) {
    console.log(
      dog >= 3
        ? `Dog number ${i + 1} is an adult, and is ${dog} years old`
        : `Dog number ${i + 1} is still a puppy 🐶`
    );
  });
};

console.log('---- TEST DATA 1 ----');
let dogsJulia = [3, 5, 2, 12, 7];
let dogsKate = [4, 1, 15, 8, 3];
checkDogs(dogsJulia, dogsKate);
console.log('---- TEST DATA 2 ----');
dogsJulia = [9, 16, 6, 8, 3];
dogsKate = [10, 5, 6, 1, 4];
checkDogs(dogsJulia, dogsKate);
 */

// CHALLENGE #2
// const calcAverageHumanAge = function (ages) {
//   let humanAge = ages.map(function (dogAge) {
//     if (dogAge <= 2) {
//       return 2 * dogAge;
//     } else {
//       return 16 + dogAge * 4;
//     }
//   });
//   humanAge = humanAge.filter(function (age) {
//     if (age >= 18) return humanAge;
//   });
//   humanAgeAvg = humanAge.reduce(function (acc, age, i, arr) {
//     return acc + age / arr.length;
//   }, 0);
//   return humanAgeAvg;
// };

/* const calcAverageHumanAge = function (ages) {
  let humanAge = ages.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  humanAge = humanAge.filter(age => age >= 18);
  humanAgeAvg = humanAge.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return humanAgeAvg;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); */

// CHALLENGE #3
const calcAverageHumanAge = ages =>
  ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

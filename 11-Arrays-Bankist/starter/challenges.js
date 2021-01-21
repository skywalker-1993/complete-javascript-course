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
/* const calcAverageHumanAge = ages =>
  ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); */

// CHALLENGE #4
// current > (recommended * 0.90) && current < (recommended * 1.10)
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const isEatingTooMuch = function (
  currentPortion,
  recommendedPortion,
  owner = ''
) {
  if (
    currentPortion > recommendedPortion * 0.9 &&
    currentPortion < recommendedPortion * 1.1
  ) {
    // console.log(`${owner}'s dog eats an okay amount of food.`);
    return `${owner}'s dog eats an okay amount of food.`;
  } else if (currentPortion > recommendedPortion) {
    // console.log(`${owner}'s dog eats too much food.`);
    return `${owner}'s dog eats too much food.`;
  } else {
    // console.log(`${owner}'s dog eats too little food.`);
    return `${owner}'s dog eats too little food.`;
  }
};

// 1.
dogs.forEach(function (entry, i, arr) {
  entry.recommendedFood = Math.trunc(entry.weight ** 0.75 * 28);
});
console.log(dogs);

// 2.
const dogSarah = dogs.find(entry => entry.owners.includes('Sarah'));
console.log(
  dogSarah &&
    isEatingTooMuch(dogSarah.curFood, dogSarah.recommendedFood, 'Sarah')
);

// 3.
let ownersEatTooMuch = [];
let ownersEatTooLittle = [];
dogs.forEach(function (el, i, arr) {
  if (isEatingTooMuch(el.curFood, el.recommendedFood).includes('much'))
    ownersEatTooMuch.push(el.owners);
  if (isEatingTooMuch(el.curFood, el.recommendedFood).includes('little'))
    ownersEatTooLittle.push(el.owners);
});
ownersEatTooLittle = ownersEatTooLittle.flat();
ownersEatTooMuch = ownersEatTooMuch.flat();
console.log(ownersEatTooMuch, ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

// 7.
console.log(
  dogs.filter(dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
      ? true
      : false
  )
);

// 8.
const dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);

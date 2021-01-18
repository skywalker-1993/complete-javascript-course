// CHALLENGE #1
const checkDogs = function (arr1, arr2) {
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

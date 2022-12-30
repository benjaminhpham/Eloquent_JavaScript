// 5.1 Flattering
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr.reduce((acc, curr) => acc.concat(curr)));

// 5.3 Everything
const everyWithLoop = (array, test) => {
  for (let element of array) {
    if (!test(element)) return false;
  }
  return true;
};

const everyWithoutLoop = (array, test) => {
  return !array.some((element) => !test(element));
};

console.log(everyWithLoop([1, 2, 3, 4, 5], (e) => e % 2 === 0)); // false
console.log(everyWithLoop([2, 4, 6, 8, 10], (e) => e % 2 === 0)); // true

console.log(everyWithoutLoop([1, 2, 3, 4, 5], (e) => e % 2 === 0)); // false
console.log(everyWithoutLoop([2, 4, 6, 8, 10], (e) => e % 2 === 0)); // true

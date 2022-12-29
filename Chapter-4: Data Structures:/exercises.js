// 4.1 The Sum of A Range
const range = (start, end, step = end > start ? 1 : -1) => {
  const arr = [];
  if (end > start) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(range(1, 10));

const sum = (arr) => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
};

console.log(sum(range(1, 10, 2)));
console.log(sum(range(5, 2, -1)));
console.log(sum(range(1, 10)));

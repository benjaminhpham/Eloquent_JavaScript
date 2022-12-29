// 3.1 Minimum
const minNum = (num1, num2) => {
  if (num1 <= num2) {
    return num1;
  }
  return num2;
};

console.log(minNum(10, 30));

// 3.2 Recursion
const isEven = (num) => {
  if (num < 0) {
    return undefined;
  }
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// 3.3 Bean Counting
const countChar = (string, char) => {
  let count = 0;
  for (let c of string) {
    if (c === char) {
      count++;
    }
  }
  return count;
};

console.log(countChar("BaBaBy", "B"));

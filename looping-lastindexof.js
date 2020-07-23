function lastIndexOf(numbers, value) {
  const allIndexes = [-1];
  for (let i = 0; i < numbers.length; i++) {
    if (value === numbers[i]) {
      allIndexes.push(i);
    }
  }
  return allIndexes.pop();
}



console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

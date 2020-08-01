const sumLargestNumbers = function (data) {
  const largestTwo = [];
  const max1 = Math.max(...data);
  largestTwo.push(max1);
  data.splice(data.indexOf(max1), 1);
  const max2 = Math.max(...data);
  largestTwo.push(max2);
  return largestTwo.reduce(function (a, b) { return a + b; });
};

// Test 
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
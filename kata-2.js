const conditionalSum = function (values, condition) {
  const filteredNums = [0]
  if (condition === "even") {
    values.forEach(element => {
      if (element % 2 === 0) {
        filteredNums.push(element);
      }
    });
  } else if (condition === "odd") {
    values.forEach(element => {
      if (element % 2 !== 0) {
        filteredNums.push(element);
      };
    });
  }
  return filteredNums.reduce(function (a, b) { return a + b })
};


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
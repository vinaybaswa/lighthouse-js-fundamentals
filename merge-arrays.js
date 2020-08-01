const merge = (array1, array2) => {
  const array3 = array1.concat(array2);
  const array4 = [];
  while (array3[0] !== undefined) {
    const smallestNum = Math.min(...array3);
    array4.push(smallestNum);
    array3.splice(array3.indexOf(smallestNum), 1);
  }
  return array4;
};

// Test
console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);
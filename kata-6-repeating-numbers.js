const repeatNumbers = (data) => {
  const repeats = [];
  data.forEach(element => {
    for (let i = 0; i < element[1]; i++) {
      repeats.push(element[0]);
    }
    if (data.length > 1 && data.indexOf(element) < data.length - 1) {
      repeats.push(", ");
    }
  });
  return repeats.join("");
};

// Test
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
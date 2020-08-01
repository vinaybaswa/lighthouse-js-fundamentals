const multiplicationTable = (maxValue) => {
  let table = "";
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      table = table.concat(i * j + " ");
    }
    table = table.concat("\n");
  }
  return table;
};

// Test
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
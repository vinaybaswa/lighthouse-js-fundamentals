var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach((donut) => {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});

const donutHoles = donuts.map((donut) => {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});

console.log(donutHoles);

words = ["cat", "in", "hat"];
words.forEach(function (element, index, array) {
  console.log("word " + index + " in " + array.toString() + " is " + element);
});

let test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300];

test.forEach(function(element, index, array) {
  if (test[index] % 3 === 0) {
    test[index] += 100;
  }
});

console.log(test);

let myArray = [1, 2, 3, 4, 5];
myArray.map(function(elem, index, array) {
  myArray[index] += 1;
  return elem;
});

console.log(myArray);

const bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

const totals = bills.map((bill) => {
  bill *= 1.15;
  bill = bill.toFixed(2)
  bill = Number(bill)
  return bill;
});

console.log(totals);

const donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

donutBox.forEach((row) => {
  console.log(row);
});

donutBox.forEach((row) => {
  row.forEach((donut) => {
    console.log(donut);
  });
});

const numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];



for (let row = 0; row < numbers.length; row++) {
  for (let column = 0; column < numbers[row].length; column++) {
    if (numbers[row][column] % 2 === 0) {
      numbers[row][column] = "even";
    } else {
      numbers[row][column] = "odd";
    }
  }
}

console.log(numbers);
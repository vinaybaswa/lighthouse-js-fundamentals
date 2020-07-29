const whereCanIPark = function (spots, vehicle) {
  const availableSpot = []
  spots.forEach((element, rowNum) => {
    element.forEach((spot, columnNum) => {
      if (vehicle === "regular") {
        if (spot === "R") {
          availableSpot.push(columnNum, rowNum);
        }
      } else if (vehicle === "small") {
        if (spot === "S" || spot === "R") {
          availableSpot.push(columnNum, rowNum);
        }
      } else if (vehicle === "motorcycle") {
        if (spot === "M" || spot === "S" || spot === "R") {
          availableSpot.push(columnNum, rowNum);
        }
      }
    });
  });
  const otherAvailableSpots = availableSpot.splice(2, availableSpot.length - 2);
  if (availableSpot[0] !== undefined) {
    return availableSpot;
  } else {
    return false;
  }
};


// TEST
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));
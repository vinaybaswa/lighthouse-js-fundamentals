// FizzBuzz--JuliaJames
let multiple = 1;
while (multiple <= 20) {
  if (multiple % 3 === 0 && multiple % 5 === 0) {
    console.log("JuliaJames");
  } else if (multiple % 3 === 0) {
    console.log("Julia");
  } else if (multiple % 5 === 0) {
    console.log("James");
  } else {
    console.log(multiple);
  }
  multiple++;
};

// 99 Botttles of juice
let numberOfBottles = 99;
while (numberOfBottles >= 1) {
  if (numberOfBottles === 1) {
    console.log(numberOfBottles + " bottle of juice on the wall! " + numberOfBottles + " bottle of juice! Take one down, pass it around... " + (numberOfBottles - 1) + " bottles of juice on the wall!");
  } else if (numberOfBottles === 2) {
    console.log(numberOfBottles + " bottles of juice on the wall! " + numberOfBottles + " bottles of juice! Take one down, pass it around... " + (numberOfBottles - 1) + " bottle of juice on the wall!");
  } else {
    console.log(numberOfBottles + " bottles of juice on the wall! " + numberOfBottles + " bottles of juice! Take one down, pass it around... " + (numberOfBottles - 1) + " bottles of juice on the wall!");
  }
  numberOfBottles--;
};

// Countdown, Liftoff!
let timeFromLiftoff = 60;
while (timeFromLiftoff >= 0) {
  if (timeFromLiftoff === 50) {
    console.log("Orbiter transfers from ground to internal power");
  } else if (timeFromLiftoff === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  } else if (timeFromLiftoff === 16) {
    console.log("Activate launch pad sound suppression system");
  } else if (timeFromLiftoff === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  } else if (timeFromLiftoff === 6) {
    console.log("Main engine start");
  } else if (timeFromLiftoff === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  } else {
    console.log("T-" + timeFromLiftoff + " seconds")
  }
  timeFromLiftoff--;
};

// Nested Loop
for (x = 0; x < 4; x++) {
  for (y = 0; y < 3; y++) {
    console.log(x + "," + y);
  }
};

// Factorials!
let solution = 1;
for (i = 12; i >= 1; i--) {
  solution *= i;
};

console.log(solution);

// Find my seat
// List of seat numbers at a theatre with 26 rows X 100 seats. both starting at 0
for (rowNumber = 0; rowNumber <= 25; rowNumber++) {
  for (seatNumber = 0; seatNumber <= 99; seatNumber++) {
    console.log(rowNumber + "-" + seatNumber);
  }
}

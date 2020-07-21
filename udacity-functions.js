// Laugh it Off
function laugh(num) {
  let sound = ""
  for (numOfHa = 0; numOfHa < num; numOfHa++) {
    sound += "ha";
  }
  return (sound + "!");
};

console.log(laugh(6));


// Scope
let bookTitle = "Le Petit Prince";
console.log(bookTitle);

function displayBookEnglish() {
  let bookTitle = "The little Prince"
  console.log(bookTitle);
};

displayBookEnglish();
console.log(bookTitle);

// Build a triangle

function printLine(width) {
  let line = "";
  for (lineWidth = 1; lineWidth <= width; lineWidth++) {
    line += "* ";
  }
  return line + "\n";
};

function buildTriangle(baseWidth) {
  let triangle = "";
  for (lineNum = 1; lineNum <= baseWidth; lineNum++) {
    triangle += printLine(lineNum);
  }
  return triangle;
};

console.log(buildTriangle(10));

// Function Expressions

//Anonymous function expression
const catSays = function (max) {
  let catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};
console.log(catSays(4));

function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
};
console.log(helloCat(catSays));

// Inline Functions

// Named function expression
const favoriteMovie = function displayFav(movieName) {
  console.log("My favorite movie is " + movieName);
};

//function declaration with TWO parameters
function movies(abcFunc, argument) {
  abcFunc(argument);
};

movies(favoriteMovie, "Bahubali");

// passing/declaring a function inline - can avoid declaring/expressing out side
function sport(xyzFunc, argument) {
  xyzFunc(argument);
};

sport(function favSport(sportName) {
  console.log("My favorite sport is " + sportName);
}, "Cricket");

// More inline
function emotions(myString, myFunc) {
  console.log("I am " + myString + myFunc(2))
};

emotions("excited", function happy(num) {
  let sound = "";
  for (i = 0; i < num; i++) {
    sound += " wohoo";
  }
  return sound += "!";
});
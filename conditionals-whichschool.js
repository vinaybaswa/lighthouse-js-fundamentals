const whichSchool = function (age) {
  if (age < 13) {
    return ("Elementary School");
  } else if (age >= 13 && age <= 18) {
    return ("Secondary School");
  } else {
    return ("Lighthouse Labs");
  }
};

console.log("I am 10. Which school should I go to?");
console.log(whichSchool(10));

console.log("I am 15. Which school should I go to?");
console.log(whichSchool(15));

console.log("I am 26. Which school should I go to?");
console.log(whichSchool(26));
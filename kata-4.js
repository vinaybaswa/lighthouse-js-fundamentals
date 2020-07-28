const instructorWithLongestName = function(instructors) {
  const nameLength = [];
  
  instructors.forEach(element => {
    nameLength.push(element.name.length);
  });

  const longestLength = nameLength.reduce(function(a, b) {return Math.max(a, b)});

  const indexOfLongestLength = nameLength.indexOf(longestLength);
  
  return instructors[indexOfLongestLength];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

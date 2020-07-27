const numberOfVowels = function (data) {
  let count = 0;
  const vowels = "aeiou";
  const dataArray = data.split("");
  for (vowel of vowels) {
    let match = dataArray.findIndex(element => element === vowel);
    if (match >= 0) {
      count++;
      dataArray.splice(match, 1);
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("tdbnk"));
console.log(numberOfVowels("aaaeeeiiiooouuu"));
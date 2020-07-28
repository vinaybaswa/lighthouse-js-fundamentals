const urlEncode = function (text) {
  let newText = text.trim();
  return newText.replace(/\s/g, "%20")
};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

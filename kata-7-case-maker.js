const camelCase = (input) => {
  for (char of input) {
    let index = input.indexOf(" ");
    while (index !== -1) {
      input = input.replace(" " + input[index + 1], input[index + 1].toUpperCase());
      index = input.indexOf(" ", index + 1);
    }
  }
  return input;
};

// Test
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
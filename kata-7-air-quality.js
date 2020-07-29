const checkAir = function (samples, threshold) {
  let numOfDirtySamples = 0;
  for (sample of samples) {
    if (sample === "dirty") {
      numOfDirtySamples += 1;
    };
  };
  const airPollution = numOfDirtySamples / samples.length;
  if (airPollution > threshold) {
    return "polluted";
  } else {
    return "clean";
  };
};


// TEST
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));
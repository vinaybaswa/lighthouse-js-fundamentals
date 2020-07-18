for (let multiple = 100; multiple <= 200; multiple++) {
  if ((multiple % 3 === 0) && (multiple % 4 === 0)) {
    console.log("LoopyLighthouse");
  } else if (multiple % 3 === 0) {
    console.log("Loopy");
  } else if (multiple % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(multiple);
  }
}
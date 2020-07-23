function range(start, end, step) {
  const filtered = [];
  if (start != undefined && end != undefined && step != undefined && step > 0) {
    for (let i = start; i <= end; i += step) {
      filtered.push(i);
    }
  }
  return filtered;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(20, 10, 2));
console.log(range(0, 10, 0));
console.log(range(0, 2));
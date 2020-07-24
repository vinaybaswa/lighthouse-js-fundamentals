const bins = {
  waste: 0,
  recycling: 0,
  compost: 0,
};

const smartGarbage = function (trash, bins) {
  if (trash == "waste") {
    bins.waste += 1;
  } else if (trash == "recycling"){
    bins.recycling += 1;
  } else if (trash == "compost") {
    bins.compost += 1;
  }
  return bins;
};

console.log(smartGarbage("recycling", bins));
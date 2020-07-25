const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const judgeVegetable = function (vegetables, metric) {
  if (metric === "redness") {
    vegetables.sort(function (a,b) {
      return a.redness - b.redness;
    });
  } else if (metric === "plumpness") {
    vegetables.sort(function (a,b) {
      return a.plumpness - b.plumpness;
    });
  }
  return vegetables[vegetables.length - 1].submitter;
};


const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));
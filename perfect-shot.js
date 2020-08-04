const finalPosition = function (moves) {
  let hMoves = [];
  let vMoves = [];
  for (const move of moves) {
    (move === "east" || move === "west") ? hMoves.push(move) : vMoves.push(move);
  }

  for (let i = 0; i < hMoves.length; i++) {
    hMoves[i] === "east" ? hMoves[i] = 1 : hMoves[i] = -1;
  }

  for (let j = 0; j < vMoves.length; j++) {
    vMoves[j] === "north" ? vMoves[j] = 1 : vMoves[j] = -1;
  }

  const hMovesTotal = hMoves.reduce((a, b) => { return a + b });
  const vMovesTotal = vMoves.reduce((a, b) => { return a + b });
  return [hMovesTotal, vMovesTotal];
};

//Test
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];
console.log(finalPosition(moves));
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = function (moves) {
  let position = [];
  let hMoves = [];
  let vMoves = [];
  for (const move of moves) {
    if (move === "east" || move === "west") {
      hMoves.push(move);
    } else {
      vMoves.push(move);
    }
  }

  for (let i = 0; i < hMoves.length; i++) {
    if (hMoves[i] === "east") {
      hMoves[i] = 1;
    } else if (hMoves[i] === "west") {
      hMoves[i] = -1;
    }
  }

  for (let i = 0; i < vMoves.length; i++) {
    if (vMoves[i] === "north") {
      vMoves[i] = 1;
    } else if (vMoves[i] === "south") {
      vMoves[i] = -1;
    }
  }

  const hMovesTotal = hMoves.reduce(function (a, b) {
    return a + b;
  }, 0);

  const vMovesTotal = vMoves.reduce(function (a, b) {
    return a + b;
  }, 0);

  position = [hMovesTotal, vMovesTotal]

  return position;
}

console.log(finalPosition(moves));
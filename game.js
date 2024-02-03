function createGame(player1, player2) {
  let curPlayer = player1;
  let winner = null;

  let moves = 0;
  let MAX_MOVES = 9;

  const play = () => {
    while (moves < MAX_MOVES) { 
      const cellInd = curPlayer.move();
      moves++;

      winner = judge(cellInd);

      if (typeof winner === "undefined") {
        togglePlayer();
      } else if (winner === null) {
        console.log('It\'s a tie!');
        break;
      } else {
        winner = curPlayer;
        console.log(`The winner is ${winner.name}`);
        break;
      }
    }

    console.log(Gameboard.printGameboard());
  };

  const togglePlayer = () => {
    curPlayer = (curPlayer === player1) ? player2 : player1;
  }
  
  const judge = (ind) => {
    const marker = curPlayer.marker;

    const firstInRowInd = Math.floor(ind / COL) * COL;
    const firstInColInd = ind % COL;
    const win =
     // row
     assess(marker, firstInRowInd, COL, 1) ||
     // col
     assess(marker, firstInColInd, ROW, COL) ||
     // diagonal 1
     assess(marker, 0, COL, ROW + 1) ||
     // diagonal 2
     assess(marker, ROW - 1, COL, ROW - 1);

    if (win) {
      return curPlayer;
    }

    const draw = !new Set(Gameboard.getGameboard()).has("");
    if (draw) {
      return null;
    }

    return undefined;
  };

  const assess = (marker, firstInd, total, step) => {
    let i = firstInd;

    for (let counter = 0; counter < total; counter++) {
      if (Gameboard.getCellValue([i]) !== marker) {
        return false;
      }
      i += step;
    }

    return true;
  };

  return {
    player1,
    player2,
    play,
  };
  }
  
const game = createGame(
  createPlayer('steve', 'X'),
  createPlayer('paul', 'O')
);

game.play();
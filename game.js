function createGame(player1, player2) {
  let activePlayer = player1;
  let winner = null;

  const play = (cellInd) => {
      console.log(`Placing ${activePlayer.name}'s marker into cell ${cellInd}`);
      activePlayer.move(cellInd);
    
      winner = judge(cellInd);

      if (typeof winner === "undefined") {
        togglePlayer();
      } else if (winner === null) {
        var resultMsg = 'It\'s a tie!';
        console.log(resultMsg);
        return resultMsg;
      } else {
        winner = activePlayer;
        resultMsg = `The winner is ${winner.name}`;
        console.log(resultMsg);
        return resultMsg;
      }

    console.log(Gameboard.printGameboard());
  };

  const togglePlayer = () => {
    activePlayer = (activePlayer === player1) ? player2 : player1;
  }
  
  const judge = (ind) => {
    const marker = activePlayer.marker;

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
      return activePlayer;
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
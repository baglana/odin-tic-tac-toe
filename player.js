function createPlayer(name, marker) {

  const move = () => {
    let cellInd = Gameboard.getRandomCellInd();
    while (!Gameboard.cellIsFree(cellInd)) {
      cellInd = Gameboard.getRandomCellInd();
    }
    Gameboard.markCell(cellInd, marker);

    return cellInd;
  }

  return { name, marker, move };
}
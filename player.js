function createPlayer(name, marker) {

  const move = (cellInd) => {
    Gameboard.markCell(cellInd, marker);
  }

  return { name, marker, move };
}
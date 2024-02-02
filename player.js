function createPlayer(name, marker) {

  const move = (row, col) => {
    Gameboard.markGameboard(row, col, marker);
  }

  return { name, marker, move };
}
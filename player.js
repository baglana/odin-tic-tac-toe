function createPlayer(name, marker) {

  const move = () => {
    let { row, col } = getRandomCell();
    while (!Gameboard.cellIsFree(row, col)) {
      ({ row, col } = getRandomCell());
    }
    Gameboard.markCell(row, col, marker);
  }

  const getRandomCell = () => {
    const row = Math.floor(Math.random() * 3);
    const col = Math.floor(Math.random() * 3);
    return { row, col }
  }

  return { name, marker, move };
}
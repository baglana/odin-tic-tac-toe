const Gameboard = (function createGameboard() {
  const gameboard = [
    new Array(3),
    new Array(3),
    new Array(3),
  ];

  const getGameboard = () => gameboard;
  
  const markCell = (row, col, marker) => {
    gameboard[row][col] = marker;
  }

  const cellIsFree = (row, col) => {
    return gameboard[row][col] === undefined;
  }


  return {
    gameboard,
    getGameboard,
    markCell,
    cellIsFree,
  };
})();
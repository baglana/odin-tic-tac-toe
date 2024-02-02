const Gameboard = (function createGameboard() {
  const gameboard = [
    new Array(3),
    new Array(3),
    new Array(3),
  ];

  const getGameboard = () => gameboard;
  const markGameboard = (row, col, marker) => {
    gameboard[row][col] = marker;
  }

  return { gameboard, getGameboard, markGameboard };
})();

console.log(Gameboard.getGameboard());
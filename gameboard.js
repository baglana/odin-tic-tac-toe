const ROW = 3;
const COL = 3;

const Gameboard = (function createGameboard() {
  const gameboard = new Array(COL * ROW).fill('');

  const getGameboard = () => gameboard;

  const printGameboard = () => console.log(gameboard);

  const getCellValue = (ind) => gameboard[ind];

  const getRandomCellInd = () => {
    const ind = Math.floor(Math.random() * ROW * COL);
    return ind;
  }
  
  const markCell = (ind, marker) => {
    gameboard[ind] = marker;
  }

  const cellIsFree = (ind) => {
    return gameboard[ind] === '';
  }


  return {
    printGameboard,
    getGameboard,
    getCellValue,
    getRandomCellInd,
    markCell,
    cellIsFree,
  };
})();
const ROW = 3;
const COL = 3;

const Gameboard = (function createGameboard() {
  const board = new Array(COL * ROW).fill('');

  const getBoard = () => board;
  
  const printBoard = () => console.log(board);
  
  const clearCells =  () => board.fill('');

  const getCellValue = (ind) => board[ind];

  const getRandomCellInd = () => {
    const ind = Math.floor(Math.random() * ROW * COL);
    return ind;
  }
  
  const markCell = (ind, marker) => {
    board[ind] = marker;
  }

  const cellIsFree = (ind) => {
    return board[ind] === '';
  }

  return {
    printBoard,
    getBoard,
    clearCells,
    getCellValue,
    getRandomCellInd,
    markCell,
    cellIsFree,
  };
})();
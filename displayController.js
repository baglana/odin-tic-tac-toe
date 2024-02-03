const displayController = (function () {
  const game = createGame(
    createPlayer('steve', 'X'),
    createPlayer('paul', 'O')
  );
  
  const boardDiv = document.querySelector('.board');

  const renderGameboard = () => {
    boardDiv.textContent = '';
    
    Gameboard.getGameboard().forEach((cellValue, ind) => {
      const cellBtn = document.createElement('button');
      cellBtn.classList.add('cell');
      cellBtn.dataset.index = ind;
      cellBtn.textContent = cellValue;
      boardDiv.appendChild(cellBtn);
    });
  }

  const boardClickHandler = (e) => {
    const selectedCellInd = e.target.dataset.index;

    if (!selectedCellInd) return;

    if (!Gameboard.getCellValue(selectedCellInd)) {
      game.play(selectedCellInd);
      renderGameboard();
    }
  }

  boardDiv.addEventListener('click', boardClickHandler);

  renderGameboard();

  return { renderGameboard };
})();

displayController.renderGameboard();
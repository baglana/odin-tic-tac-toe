const displayController = (function () {
  const createGameAndPromptNames = () => {
    return createGame(
      createPlayer(prompt('Enter player1 name: ', 'Steve'), 'X'),
      createPlayer(prompt('Enter player2 name: ', 'Paul'), 'O')
    );
  }
  
  let game = createGameAndPromptNames();
  
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
      const results = game.play(selectedCellInd);

      if (results) {
        renderResults(results);
      }
      
      renderGameboard();
    }
  }

  boardDiv.addEventListener('click', boardClickHandler);

  renderGameboard();

  const h2 = document.querySelector('.results');
  const renderResults = (resultMsg) => {
    h2.textContent = resultMsg;
  }

  const renderRestartBtn = () => {
    const restartBtn = document.querySelector('.restart-btn');
    restartBtn.onclick = () => {
      h2.textContent = '';
      Gameboard.clearCells();
      renderGameboard();
      game = createGameAndPromptNames();
    }
  }
  
  return { renderGameboard, renderRestartBtn };
})();


displayController.renderGameboard();
displayController.renderRestartBtn();
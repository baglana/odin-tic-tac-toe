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
    
    Gameboard.getBoard().forEach((cellValue, ind) => {
      const cellBtn = document.createElement('button');
      cellBtn.classList.add('cell');
      cellBtn.classList.add((game.getActivePlayer() === game.player1) ? 'player1' : 'player2');
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

  const renderResults = (resultMsg) => {
    const h2 = document.querySelector('.results');
    h2.textContent = resultMsg;
  }

  const renderRestartBtn = () => {
    const restartBtn = document.querySelector('.restart-btn');
    restartBtn.onclick = () => {
      renderResults('');
      Gameboard.clearCells();
      renderGameboard();
      game = createGameAndPromptNames();
    }
  }
  
  return { renderGameboard, renderRestartBtn };
})();


displayController.renderGameboard();
displayController.renderRestartBtn();
function createGame(player1, player2) {
  let winner = null;

  const getWinner = () => winner;
  const setWinner = () => {};

  let moves = 0;
  let MAX_MOVES = 9;

  const play = () => {
    let prevPlayer = player1;

    while (moves < MAX_MOVES) { 
      let curPlayer = (JSON.stringify(prevPlayer) === JSON.stringify(player1)) ? player2 : player1;
      curPlayer.move();
      moves++;
      prevPlayer = curPlayer;
    }
  };

  return {
    player1,
    player2,
    getWinner,
    setWinner,
    play,
  };
  }
  
const game = createGame(
  createPlayer('steve', 'X'),
  createPlayer('paul', 'O')
);

game.play();

console.log(Gameboard.getGameboard());
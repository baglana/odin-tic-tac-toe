function createGame(p1, p2) {
  let winner = null;

  const getWinner = () => winner;
  const setWinner = () => {};

  return { p1, p2, getWinner, setWinner };
}

const player1 = createPlayer('steve', 'X');
const player2 = createPlayer('paul', 'O');

const game = createGame(player1, player2);

player1.move(1, 2);
player2.move(1, 1);

console.log(Gameboard.getGameboard());
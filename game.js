function createGame(p1, p2) {
  let winner = null;

  const getWinner = () => winner;
  const setWinner = () => {};

  return { p1, p2, getWinner, setWinner };
}

const game = createGame(player1, player2);

console.log({
  p1: game.p1,
  p2: game.p2,
  winner: game.getWinner()
});
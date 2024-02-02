function createPlayer(name, marker) {
  return { name, marker, getPoints, givePoint };
}

const player1 = createPlayer('steve', 'X');
const player2 = createPlayer('paul', 'O');

console.log({
  name1: player1.name,
  marker1: player1.marker,
});

console.log({
  name2: player2.name,
  marker2: player2.marker,
});
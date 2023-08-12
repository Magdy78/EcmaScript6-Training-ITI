// Step 1: Create player arrays for each team
const players1 = ['Aaron Ramsdale', 'William Saliba', 'Gabriel Magalhães', 'Jurrien Timber', 'Ben White', 'Declan Rice (C)',
 'Thomas Partey', 'Martin Ødegaard', 'Bukayo Saka', 'Gabrial Jesus', 'Kai Havertz'];

const players2 = ['Ederson', 'João Cancelo', 'Rúben Dias', 'Aymeric Laporte', 'John Stones', 
'Rodri', 'Kalvin Phillips', 'Erling Haaland', 'Kevin De Bruyne', 'Phil Foden', 'Jack Grealish'];


const [gk, ...fieldPlayers] = players1;


const allPlayers = [...players1, ...players2];


const players1Final = [...players1, 'Ben White', 'Gabrial Jesus', 'Thomas Partey'];


const { team1, draw, team2 } = { team1: 1.5, draw: 3.2, team2: 2.8 };


const printGoals = (...playerNames) => {
  console.log(`${playerNames.length} goals were scored in total.`);
  playerNames.forEach(playerName => console.log(playerName));
};


printGoals('Gabrial Jesus', 'Bukayo Saka', 'Declan Rice (C)', 'Declan Rice (C)');
printGoals('Player1', 'Player2', 'Player3');


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card']
]);

const events = [...new Set(gameEvents.values())];

gameEvents.delete(64);

console.log(`An event happened every ${90 / gameEvents.size} minutes.`);


for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
  console.log(`[${half}] ${minute}: ${event}`);
}
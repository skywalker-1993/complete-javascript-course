'use-strict';

// CHALLENGE #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1);
console.log(draw);
console.log(team2);

const printGoals = function (...playerNames) {
  const goals = playerNames.length;
  console.log(`Players that scored goals: ${playerNames}`);
  console.log(`Total number of scored goals: ${goals}`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

console.log(
  (game.odds.team1 > game.odds.team2 && 'Borrussia Dortmund') ||
    (game.odds.team1 < game.odds.team2 && 'Bayern Munich')
);

// Alternative to the last one:
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win'); */

// CHALLENGE #2
/* for (const [i, player] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(i) + 1}: ${player}`);
}

let totalOdd = (numOccur = 0);
for (const odd of Object.values(game.odds)) {
  totalOdd += odd;
  numOccur++;
}
console.log(totalOdd / numOccur);

for ([team, odd] of Object.entries(game.odds)) {
  const victoryStr = team !== 'x' ? 'victory ' : '';
  //console.log(game[team]);
  console.log(`Odd of ${victoryStr}${game[team] ?? 'draw'}: ${odd}`);
}

const scorers = {};
for (player of game.scored) {
  if (!scorers[player]) {
    scorers[player] = 1;
  } else {
    scorers[player]++;
  }
}
console.log(scorers); */

// CHALLENGE #3
/* const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const time = [...gameEvents.keys()].pop();
//console.log(time);
const eventStr = `An event happened, on average, every ${
  time / gameEvents.size
} minutes`;
console.log(eventStr);

for (const [key, event] of gameEvents.entries()) {
  console.log(`${key <= 45 ? '[FIRST' : '[SECOND'} HALF] ${key}: ${event}`);
}
 */

// CHALLENGE #4 --- More Complex version...
let textBox;

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const getMaxLengthOfArray = function (listOfStrings) {
  let maxSize = 0;
  for (const str of listOfStrings) {
    if (str.length > maxSize) maxSize = str.length;
  }
  return maxSize;
};

const updateToCamelCase = function (text) {
  const consoleList = [];
  if (text && text.includes('_')) {
    const strArray = text.split('\n');
    for (const str of strArray) {
      const lowerCaseArray = str
        .trim()
        .toLowerCase()
        .split('_')
        .map(el => el.replaceAll(' ', ''));
      let secondWord = '';
      for (let i = 1; i < lowerCaseArray.length; i++) {
        secondWord +=
          lowerCaseArray[i][0].toUpperCase() + lowerCaseArray[i].slice(1);
      }
      const newWord = lowerCaseArray[0].trim() + secondWord;
      consoleList.push(newWord);
    }
  }
  return consoleList;
};

document.addEventListener('input', function () {
  textBox = document.querySelector('textarea').value;
});

document.querySelector('button').addEventListener('click', function () {
  const listOfStrings = updateToCamelCase(textBox);
  const maxSize = getMaxLengthOfArray(listOfStrings);
  if (maxSize) {
    for (const [i, str] of listOfStrings.entries()) {
      console.log(str.padEnd(maxSize + 4, ' ') + '✅'.repeat(i + 1));
    }
  }
});

// NEW CHALLENGE
/* const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(flights.split('+'));
// console.log('🔴 Delayed Departure from FAO to TXL (11h25)'.length);
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(44);
  console.log(output);
} */

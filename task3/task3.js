const crypto = require('crypto');
const Table = require('cli-table3');
class KeyGen {
  static genKey() {
    return crypto.randomBytes(32).toString('hex');
  }
}

class HMACGen {
  static genHMAC(key, message) {
    return crypto.createHmac('sha3-256', key).update(message).digest('hex');
  }
}

class Rules {
  constructor(moves) {
    this.moves = moves;
    this.n = moves.length;
  }

  getResult(playerMove, computerMove) {
    const playerIndex = this.moves.indexOf(playerMove);
    const computerIndex = this.moves.indexOf(computerMove);

    if (playerIndex === computerIndex) {
      return 'Draw';
    }

    const half = Math.floor(this.n / 2);
    if ((playerIndex - computerIndex + this.n) % this.n <= half) {
      return 'Win';
    } else {
      return 'Lose';
    }
  }
}

class Help {
  constructor(moves) {
    this.moves = moves;
  }

  displayTable() {
    const numberOfMoves = this.moves.length;
    // const table = [];
    // table.push([''].concat(this.moves));

    const table = new Table({
      head: [`v PC\User >`].concat(this.moves),
      colWidths: Array(numberOfMoves+1).fill(15)
    })

    for (let i = 0; i < numberOfMoves; i++) {
      const row = [this.moves[i]];
      for (let j = 0; j < numberOfMoves; j++) {
        if (i === j) {
          row.push('Draw');
        } else if ((j - i + numberOfMoves) % numberOfMoves <= Math.floor(numberOfMoves / 2)) {
          row.push('Win');
        } else {
          row.push('Lose');
        }
      }
      table.push(row);
    }

    // table.forEach(row => {
    //   console.log(row.join('\t'));
    // });
    console.log(table.toString());
  }
}

class Game {
  constructor(moves) {
    this.moves = moves;
    this.key = KeyGen.genKey();
    this.computerMove = moves[Math.floor(Math.random() * moves.length)];
    this.hmac = HMACGen.genHMAC(this.key, this.computerMove);
    this.rules = new Rules(moves);
  }

  playGame() {
    console.log(`HMAC: ${this.hmac}`);
    console.log('Available moves:');
    this.moves.forEach((move, index) => {
      console.log(`${index + 1} - ${move}`);
    });
    console.log('0 - exit');
    console.log('? - help');

    process.stdin.setEncoding('utf-8');
    process.stdin.on('data', (input) => {
      input = input.trim();

      if (input === '?') {
        const helpTable = new Help(this.moves);
        helpTable.displayTable();
        console.log('Enter your move:');

      } else if (input === '0') {
        console.log('Goodbye!');
        process.exit();

      } else if (/^\d+$/.test(input) && parseInt(input) >= 1 && parseInt(input) <= this.moves.length) {
        const userMove = this.moves[parseInt(input) - 1];
        console.log(`Your move: ${userMove}`);
        console.log(`Computer move: ${this.computerMove}`);
        const result = this.rules.getResult(userMove, this.computerMove);
        console.log(result === 'Win' ? 'You win!' : result === 'Lose' ? 'You lose!' : 'It\'s a draw!');
        console.log(`HMAC key: ${this.key}`);
        process.exit();
        
      } else {
        console.log('Invalid input. Please try again.');
        console.log('Available moves:');
        this.moves.forEach((move, index) => {
          console.log(`${index + 1} - ${move}`);
        });
        console.log('0 - exit');
        console.log('? - help');
      }
    });

    console.log('Enter your move:');
  }
}

const arguments = process.argv.slice(2);

if (arguments.length < 3 || arguments.length % 2 === 0 || new Set(arguments).size !== arguments.length) {
  console.log('Error: You must provide an odd number of non-repeating moves (at least 3).');
  console.log('Example: node game.js rock paper scissors');
  process.exit();
}
const game = new Game(arguments);
game.playGame();

// node task3.js rock Spock paper lizard scissors

// link to a video demonstrating
// 1 - launch with 3 and 7 parameters, +
// 2 - launch with incorrect parameters (repeated or even number, one or no), +
// 3 - help table generation (on 5 parameters), +
// 4 - choice of the user move, output of results; +
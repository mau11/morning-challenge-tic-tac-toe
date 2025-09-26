// Reference: https://thejsway.net/chapter09/

// Set variables
const currentTurn = document.querySelector("span");
const result = document.querySelector("h3");
const ul = document.querySelector("ul");

class TicTacToe {
  constructor() {
    this.currentPlayer = "X";
    this.winner = "";
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  newBoard() {
    console.log("New Game is starting...");

    for (let i = 0; i < 9; i++) {
      const li = document.createElement("li");
      li.id = `sq-${i}`;

      // Add event listeners to board
      li.onclick = () => this.playerMove(i);
      ul.appendChild(li);
    }
  }

  playerMove(i) {
    // Look up board index based on click
    let indexMap = {
      0: [0, 0],
      1: [0, 1],
      2: [0, 2],
      3: [1, 0],
      4: [1, 1],
      5: [1, 2],
      6: [2, 0],
      7: [2, 1],
      8: [2, 2],
    };

    // Add X or O to board based on player click
    const square = document.getElementById(`sq-${i}`);
    const row = indexMap[i][0];
    const col = indexMap[i][1];

    if (this.board[row][col] === null) {
      square.innerText = this.currentPlayer;
      square.onclick = null;
      this.board[row][col] = this.currentPlayer;
    }

    // Check if current player won after each move
    this.checkWinner();
  }

  checkWinner() {
    // Check rows
    if (
      (this.board[0][0] &&
        this.board[0][0] === this.board[0][1] &&
        this.board[0][1] === this.board[0][2]) ||
      (this.board[1][0] &&
        this.board[1][0] === this.board[1][1] &&
        this.board[1][1] === this.board[1][2]) ||
      (this.board[2][0] &&
        this.board[2][0] === this.board[2][1] &&
        this.board[2][1] === this.board[2][2])
    ) {
      this.announceWinner();
    } else if (
      // Check columns
      (this.board[0][0] &&
        this.board[0][0] === this.board[1][0] &&
        this.board[1][0] === this.board[2][0]) ||
      (this.board[0][1] &&
        this.board[0][1] === this.board[1][1] &&
        this.board[1][1] === this.board[2][1]) ||
      (this.board[0][2] &&
        this.board[0][2] === this.board[1][2] &&
        this.board[1][2] === this.board[2][2])
    ) {
      this.announceWinner();
    } else if (
      // Check diagonals
      (this.board[0][0] &&
        this.board[0][0] === this.board[1][1] &&
        this.board[1][1] === this.board[2][2]) ||
      (this.board[0][2] &&
        this.board[0][2] === this.board[1][1] &&
        this.board[1][1] === this.board[2][0])
    ) {
      this.announceWinner();
    } else {
      // if no winner, changeTurn()
      console.log("No winner yet");
      this.changeTurn();
    }
  }

  changeTurn() {
    // After play, change to next player
    console.log("Changing turns");
    if (this.currentPlayer === "X") {
      this.currentPlayer = "O";
      currentTurn.innerText = "O";
    } else {
      this.currentPlayer = "X";
      currentTurn.innerText = "X";
    }
  }

  announceWinner() {
    this.winner = this.currentPlayer;
    result.innerText = `Player ${this.winner} has won!`;
    console.log(`Player ${this.winner} has won!`);

    // Remove event listeners when game is over
    document.querySelectorAll("li").forEach((li) => {
      li.onclick = null;
    });
  }

  reset() {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    ul.innerHTML = "";
    result.innerHTML = "Turn: Player <span>X</span>";
    this.newBoard();
  }
}

const game = new TicTacToe();
game.newBoard();

// Allow game reset
document.querySelector("p").onclick = () => game.reset();

// Reference: https://thejsway.net/chapter09/

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

  playerMove(row, col) {
    // add X or O to board at proper index
    this.board[row][col] = this.currentPlayer;
    this.checkWinner();
  }

  checkWinner() {
    // check if current player won after each move
    // what does winning mean?
    // across: board[0][0] === board[0][1] === board[0][2]
    // down: board[0][0] === board[1][0] === board[2][0]
    // diagonal: board[0][0] === board[1][1] === board[2][2]
    // other diagonal: board[0][2] === board[1][1] === board[2][0]

    console.log("Checking for winner");
    if (
      (this.board[0][0] &&
        this.board[0][0] === this.board[0][1] &&
        this.board[0][1] === this.board[0][2]) ||
      (this.board[0][0] &&
        this.board[0][0] === this.board[1][0] &&
        this.board[1][0] === this.board[2][0]) ||
      (this.board[0][0] &&
        this.board[0][0] === this.board[1][1] &&
        this.board[1][1] === this.board[2][2]) ||
      (this.board[0][2] &&
        this.board[0][2] === this.board[1][1] &&
        this.board[1][1] === this.board[2][0])
    ) {
      this.winner = this.currentPlayer;
      console.log(`Player ${this.winner} has won!`);
    } else {
      // if no winner, changeTurn()
      console.log("No winner yet");
      this.changeTurn();
    }
  }

  changeTurn() {
    // after play, change to next player
    console.log("Changing Turns");
    this.currentPlayer === "X"
      ? (this.currentPlayer = "O")
      : (this.currentPlayer = "X");
  }
}

const game = new TicTacToe();

game.playerMove(0, 0);
game.playerMove(0, 1);
game.playerMove(1, 1);
game.playerMove(1, 2);
game.playerMove(2, 2); // player X wins

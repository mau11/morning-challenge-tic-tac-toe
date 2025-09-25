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

  playerMove() {
    // add X or O to board at proper index
    // checkWinner()
  }

  checkWinner() {
    // check if current player won after each move
    // what does winning mean?
    // across: board[0][0] === board[0][1] === board[0][2]
    // down: board[0][0] === board[1][0] === board[2][0]
    // diagonal: board[0][0] === board[1][1] === board[2][2]
    // other diagonal: board[0][2] === board[1][1] === board[2][0]
    // if no winner, changeTurn()
  }

  changeTurn() {
    // after play, change to next player
    this.currentPlayer === "X"
      ? (this.currentPlayer = "O")
      : (this.currentPlayer = "X");
  }
}

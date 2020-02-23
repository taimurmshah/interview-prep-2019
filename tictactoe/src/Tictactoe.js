import React, { Component } from "react";
import Box from "./Box";

class Tictactoe extends Component {
  state = {
    board: [["#", "#", "#"], ["#", "#", "#"], ["#", "#", "#"]],
    xTurn: true,
    gameOver: false,
    //winner will either be "X won!", "O won!", or "There was no winner, play again!"
    winner: ""
  };

  clickHandler = (i, j) => {
    if (this.state.board[i][j] !== "#") return;
    let newBoard = [...this.state.board];
    newBoard[i][j] = this.state.xTurn ? "X" : "O";
    this.setState({
      board: newBoard,
      xTurn: !this.state.xTurn
    });
  };

  //checking for winner methods below

  checkVert = (i, j) => {
    const board = this.state.board;
    const me = board[i][j];

    if (
      board[i + 1][j] &&
      board[i + 1][j] === me &&
      board[i + 2][j] &&
      board[i + 2][j] === me
    )
      return true;

    if (
      board[i - 1][j] &&
      board[i - 1][j] === me &&
      board[i + 1][j] &&
      board[i + 1][j] === me
    )
      return true;
    if (
      board[i - 1][j] &&
      board[i - 1][j] === me &&
      board[i - 2][j] &&
      board[i - 2][j] === me
    )
      return true;
    return false;
  };

  checkHoriz = (i, j) => {
    const board = this.state.board;
    const me = board[i][j];
    if (
      board[i][j + 1] &&
      board[i][j + 1] === me &&
      board[i][j + 2] &&
      board[i][j + 2] === me
    )
      return true;

    if (
      board[i][j - 1] &&
      board[i][j - 1] === me &&
      board[i][j + 1] &&
      board[i][j + 1] === me
    )
      return true;
    if (
      board[i][j - 1] &&
      board[i][j - 1] === me &&
      board[i][j - 2] &&
      board[i][j - 2] === me
    )
      return true;
    return false;
  };

  checkDiag = (i, j) => {};

  gameBoxes = () => {
    let counter = 0;
    let boxes = [];
    for (let i = 0; i < this.state.board.length; i++) {
      for (let j = 0; j < this.state.board[i].length; j++) {
        boxes.push(
          <Box
            key={counter}
            i={i}
            j={j}
            clickHandler={this.clickHandler}
            text={this.state.board[i][j]}
          />
        );
        counter++;
      }
    }
    return boxes;
  };

  render() {
    return (
      <div>
        <div className="header-container">
          {this.state.gameOver ? (
            <h2>{this.state.winner}</h2>
          ) : (
            <h2>It is {this.state.xTurn ? "X" : "O"}'s turn!</h2>
          )}
        </div>
        <div className="grid">{this.gameBoxes()}</div>
      </div>
    );
  }
}

export default Tictactoe;

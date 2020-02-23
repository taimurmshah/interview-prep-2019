import React, { useState } from "react";
import "./App.css";
import Tictactoe from "./Tictactoe";

function App() {
  const [word, setWord] = useState("");
  return (
    <div>
      <div className="header-container">
        <h1>Welcome to Tic Tac Toe</h1>
      </div>
      <div className="form-container">
        <form>
          <input
            className="input"
            type="text"
            value={word}
            onChange={e => {
              setWord(e.value);
            }}
          />
        </form>
      </div>
      <div className="game-board">
        <Tictactoe />
      </div>
    </div>
  );
}

export default App;

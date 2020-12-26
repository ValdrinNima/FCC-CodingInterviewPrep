import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [gameState, setGameState] = useState({ isRunning: false, speed: 50 });
	const [generation, setGeneration] = useState(0);
	const [board, setBoard] = useState([]);

	const generateBoard = (rows, cols) => {
		for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        
      }
      
		}
	};

	return (
		<div className="wrapper">
			<h1 className="title">Game of Life</h1>
			<div className="game-container">
				<div className="game-window">
					{board.map((cell, ind) => {

            return (<div></div>)
          })}
				</div>
				<div className="control-panel">
					<button className="btn">Start</button>
					<button className="btn">Randomize</button>
					<button className="btn">Clear Board</button>
					<button className="btn">Patterns</button>
				</div>
				<div className="data-panel">
					<p>Generation</p>
					<p>Speed</p>
				</div>
			</div>
		</div>
	);
}

export default App;

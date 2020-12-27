import React, { useState, useEffect } from "react";
import Cell from "./utils/GoLRules";
import "./App.css";

let gameLoop;

function App() {
	const [gameState, setGameState] = useState({ isRunning: true, speed: 500 });
	const [generation, setGeneration] = useState(0);
	const [board, setBoard] = useState([]);

	const generateRandomBoard = (rows = 30, cols = 50) => {
		let board = [];
		for (let i = 0; i < rows; i++) {
			board.push([]);
			for (let j = 0; j < cols; j++) {
				let randNum = Math.floor(Math.random() * 2);
				board[i].push(randNum.toString());
			}
		}
		return board;
	};

	const generateCleanBoard = (rows = 30, cols = 50) => {
		let board = [];
		for (let i = 0; i < rows; i++) {
			board.push([]);
			for (let j = 0; j < cols; j++) {
				if ((i === 2 || i === 3 || i === 4) && j === 2) {
					board[i].push("1");
				} else {
					board[i].push("0");
				}
			}
		}
		return board;
	};

	const mainLoop = () => {
		gameLoop = setInterval(() => {
			setBoard((prevBoard) => {
				let newBoard = prevBoard.map((inner) => inner.slice());
				for (let i = 0; i < prevBoard.length; i++) {
					for (let j = 0; j < prevBoard[i].length; j++) {
						// Check for all surrounding cells and put them in an array

						let myCell = new Cell(i, j, prevBoard);

						let surroundingCells = myCell.checkSurroundingCells();

						let aliveCount = surroundingCells.filter(
							(value) => value === "1"
						).length;

						// Dead cell surrounded by three alive cell turns alive
						if (prevBoard[i][j] === "0" && aliveCount === 3) {
							newBoard[i][j] = "1";
						}

						if (prevBoard[i][j] === "1" && aliveCount < 2) {
							newBoard[i][j] = "0";
						}

						if (prevBoard[i][j] === "1" && aliveCount > 3) {
							newBoard[i][j] = "0";
						}
					}
				}
				return newBoard;
			});

			setGeneration((prevState) => prevState + 1);
		}, gameState.speed); // TODO: Make this gameState.speed
	};

	useEffect(() => {
		setBoard(generateCleanBoard());

		if (gameState.isRunning) {
			mainLoop();
		}
	}, [gameState]);

	return (
		<div className="wrapper">
			<h1 className="title">Game of Life</h1>
			<div className="game-container">
				<div className="game-window">
					{board.map((row, rowIndex) => {
						return row.map((cell, colIndex) => {
							return (
								<div
									key={colIndex + rowIndex * row.length}
									id={colIndex + rowIndex * row.length}
									className={
										cell === "0"
											? "cell dead"
											: "cell alive"
									}
								></div>
							);
						});
					})}
				</div>
				<div className="control-panel">
					<button
						onClick={() =>
							setGameState((prevState) => {
								clearInterval(gameLoop);
								return {
									...prevState,
									isRunning: !prevState.isRunning,
								};
							})
						}
						className="btn"
					>
						Start
					</button>
					<button
						onClick={() => setBoard(generateRandomBoard())}
						className="btn"
					>
						Randomize
					</button>
					<button
						onClick={() => {
							setGameState((prevState) => ({
								...prevState,
								isRunning: false,
							}));
							setBoard(generateCleanBoard());
						}}
						className="btn"
					>
						Clear Board
					</button>
					<button className="btn">Patterns</button>
				</div>
				<div className="data-panel">
					<p>Generation</p>
					{generation}
					<p>Speed</p>
				</div>
			</div>
		</div>
	);
}

export default App;

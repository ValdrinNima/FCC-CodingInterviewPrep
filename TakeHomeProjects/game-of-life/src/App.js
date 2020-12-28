import React, { useState, useEffect } from "react";
import Cell from "./utils/GoLRules";
import PatternMenu from "./components/PatternMenu";
import ControlPanel from "./components/ControlPanel";
import DataPanel from "./components/DataPanel";
import "./App.css";

export let gameLoop;

function App() {
	const [gameState, setGameState] = useState({
		isRunning: false,
		speed: 100,
	});
	const [generation, setGeneration] = useState(0);
	const [mouseDown, setMouseDown] = useState(false);
	const [showPatternMenu, setShowPatternMenu] = useState(false);
	const [board, setBoard] = useState((rows = 30, cols = 50) => {
		let board = [];
		for (let i = 0; i < rows; i++) {
			board.push([]);
			for (let j = 0; j < cols; j++) {
				board[i].push("0");
			}
		}
		return board;
	});

	const handleOnClick = (row, col) => {
		setBoard((prevState) => {
			let newBoard = prevState.map((inner) => inner.slice());
			newBoard[row][col] = "1";
			return newBoard;
		});
	};

	const handleOnMouseOver = (e, row, col) => {
		e.preventDefault();
		setBoard((prevState) => {
			let newBoard = prevState.map((inner) => inner.slice());
			newBoard[row][col] = "1";
			return newBoard;
		});
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
		}, gameState.speed);
	};

	useEffect(() => {
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
									disabled={gameState.isRunning}
									onMouseUp={(e) => setMouseDown(false)}
									onMouseDown={(e) => {
										handleOnClick(rowIndex, colIndex);
										setMouseDown(true);
									}}
									onMouseOver={(e) => {
										if (mouseDown) {
											handleOnMouseOver(
												e,
												rowIndex,
												colIndex
											);
										}
									}}
									onClick={() =>
										handleOnClick(rowIndex, colIndex)
									}
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
				<ControlPanel
					setGameState={setGameState}
					setGeneration={setGeneration}
					setShowPatternMenu={setShowPatternMenu}
					setBoard={setBoard}
				></ControlPanel>
				<DataPanel
					setGameState={setGameState}
					gameState={gameState}
					setGeneration={setGeneration}
					generation={generation}
					setBoard={setBoard}
				></DataPanel>
				{showPatternMenu && (
					<PatternMenu
						setBoard={setBoard}
						setGameState={setGameState}
						setGeneration={setGeneration}
						setShowPatternMenu={setShowPatternMenu}
					></PatternMenu>
				)}
			</div>
		</div>
	);
}

export default App;

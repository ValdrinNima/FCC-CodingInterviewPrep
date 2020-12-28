import React from "react";
import { gameLoop } from "../App";

function ControlPanel({
	setBoard,
	setGameState,
	setGeneration,
	setShowPatternMenu,
}) {
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
				board[i].push("0");
			}
		}
		return board;
	};
	return (
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
				onClick={() => {
					setGeneration(0);
					setBoard(generateRandomBoard());
					clearInterval(gameLoop);
					setGameState((prevState) => ({
						...prevState,
						isRunning: false,
					}));
				}}
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
					clearInterval(gameLoop);
					setBoard(generateCleanBoard());
					setGeneration(0);
				}}
				className="btn"
			>
				Clear Board
			</button>
			<button
				onClick={() => {
					setShowPatternMenu((prevState) => !prevState);
				}}
				className="btn"
			>
				Patterns
			</button>
		</div>
	);
}

export default ControlPanel;

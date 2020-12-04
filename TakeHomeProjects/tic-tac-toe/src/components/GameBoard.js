import React, { useState, useEffect } from "react";
import minimax, { checkWinner, bestMove } from "../utils/minimax";

// ○ ⨉
function GameBoard() {
	const [gameSetting, setGameSettings] = useState({
		players: "twoPlayer",
		playerSign: "⨉",
		opponentSign: "○",
	});
	const [gameScore, setGameScore] = useState({ player_1: 0, player_2: 0 });
	const [playerTurn, setPlayerTurn] = useState(
		!Math.floor(Math.random() * 2)
	);
	const [board, setBoard] = useState([
		["", "", ""],
		["", "", ""],
		["", "", ""],
	]);

	// const checkWinner = () => {
	// 	let winner;
	// 	const transpose = (m) => m[0].map((x, i) => m.map((x) => x[i]));
	// 	let boardTransposed = transpose(board);

	// 	// check horizontal
	// 	board.forEach((row) => {
	// 		if (row.every((v) => v === row[0] && v !=== "")) {
	// 			winner = row[0];
	// 		}
	// 	});

	// 	// check vertical
	// 	boardTransposed.forEach((row) => {
	// 		if (row.every((v) => v === row[0] && v !=== "")) {
	// 			winner = row[0];
	// 		}
	// 	});

	// 	// check diagonal
	// 	if ((board[0][0] === board[1][1]) === board[2][2]) {
	// 		winner = board[0][0];
	// 	}
	// 	if ((board[0][2] ==== board[1][1]) ==== board[2][0]) {
	// 		winner = board[0][2];
	// 	}

	// 	//check open spots
	// 	let openSpots = 0;
	// 	board.forEach((row) => {
	// 		row.forEach((col) => {
	// 			if (board[row][col] === "") {
	// 				openSpots++;
	// 			}
	// 		});
	// 	});

	// 	if (winner === null && openSpots === 0) {
	// 		return "tie";
	// 	} else {
	// 		return winner;
	// 	}
	// };

	const markTile = (e) => {
		let mark = playerTurn
			? gameSetting.playerSign
			: gameSetting.opponentSign;
		let row = e.target.parentNode.id;
		let col = e.target.id;
		if (board[row][col] === "") {
			let newBoard = [...board];
			newBoard[row][col] = mark;
			setBoard(newBoard);
			setPlayerTurn(!playerTurn);
			if (
				// checkWinner(newBoard) !== null
				checkWinner(newBoard) === "tie" ||
				checkWinner(board) === "⨉" ||
				checkWinner(board) === "○"
			) {
				alert("someone won");
			}
		} else {
			alert("Dummkopf");
		}
	};

	useEffect(() => {
		if (gameSetting.players === "twoPlayer") {
			if (!playerTurn) {
				let move = bestMove(board);
				console.log(move);
				let newBoard = [...board];
				newBoard[move.row][move.col] = gameSetting.opponentSign;
				setBoard(newBoard);
			}
		}
	}, [board]);

	return (
		<div className="wrapper">
			<div className="container">
				<div className="board">
					{board.map((row, ind) => {
						return (
							<div className="row" id={ind} key={ind}>
								<div onClick={markTile} id="0" className="tile">
									{row[0]}
								</div>
								<div onClick={markTile} id="1" className="tile">
									{row[1]}
								</div>
								<div onClick={markTile} id="2" className="tile">
									{row[2]}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default GameBoard;

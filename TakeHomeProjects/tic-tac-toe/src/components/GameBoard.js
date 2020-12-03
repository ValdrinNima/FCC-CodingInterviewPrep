import React, { useState, useEffect } from "react";

// ○ x
function GameBoard() {
	const [score, setScore] = useState();
	const [playerTurn, setPlayerTurn] = useState(
		!Math.floor(Math.random() * 2)
	);
	const [board, setBoard] = useState([
		["", "", ""],
		["", "", ""],
		["", "", ""],
	]);

	const markTile = (e) => {
		let row = e.target.parentNode.id;
		let col = e.target.id;
		let newBoard = board;
		newBoard[row][col] = "X";
		console.log(board);
		setBoard(board);
	};

	useEffect(() => {});

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

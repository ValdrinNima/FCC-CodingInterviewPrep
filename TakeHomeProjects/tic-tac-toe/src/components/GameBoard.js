import React, { useState, useEffect } from "react";
import { checkWinner, bestMove } from "../utils/minimax";
import { ErrorMessage, EndGameMessage } from "./Messages";

function GameBoard({
	gameSetting,
	shouldComponentsRender,
	setShouldComponentsRender,
	setGameSettings,
}) {
	const [winner, setWinner] = useState();
	const [renderMessage, setRenderMessage] = useState({
		ErrorMessage: false,
		EndGameMessage: false,
	});
	const [gameScore, setGameScore] = useState({ player: 0, opponent: 0 });
	const [playerTurn, setPlayerTurn] = useState(
		!Math.floor(Math.random() * 2)
	);
	const [board, setBoard] = useState([
		["", "", ""],
		["", "", ""],
		["", "", ""],
	]);

	const resetAll = () => {
		setWinner("");
		setGameScore({ player: 0, opponent: 0 });
		setBoard([
			["", "", ""],
			["", "", ""],
			["", "", ""],
		]);
		setGameSettings({});
		setShouldComponentsRender({
			ChooseMode: true,
			ChooseSign: false,
			GameBoard: false,
		});
	};

	const showThis = shouldComponentsRender.GameBoard
		? "menu-container display-block"
		: "menu-container display-none";

	const markTileTwoPlayer = (e) => {
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
			if (checkWinner(newBoard) !== null) {
				if (checkWinner(newBoard) === "⨉") {
					setWinner("⨉");
					gameSetting.playerSign === "⨉"
						? setGameScore((prevState) => ({
								...prevState,
								player: gameScore.player++,
						  }))
						: setGameScore((prevState) => ({
								...prevState,
								opponent: gameScore.opponent++,
						  }));
				} else if (checkWinner(newBoard) === "○") {
					setWinner("○");
					gameSetting.playerSign === "○"
						? setGameScore((prevState) => ({
								...prevState,
								player: gameScore.player++,
						  }))
						: setGameScore((prevState) => ({
								...prevState,
								opponent: gameScore.opponent++,
						  }));
				} else {
					setWinner("tie");
					setBoard([
						["", "", ""],
						["", "", ""],
						["", "", ""],
					]);
				}
				setRenderMessage((prevState) => ({
					...prevState,
					EndGameMessage: true,
				}));
			}
		} else {
			setRenderMessage((prevState) => ({
				...prevState,
				ErrorMessage: true,
			}));
		}
	};
	const markTileOnePlayer = (e) => {
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
				checkWinner(newBoard) !== null
				// checkWinner(newBoard) === "tie" ||
				// checkWinner(board) === "⨉" ||
				// checkWinner(board) === "○"
			) {
				console.log(checkWinner(newBoard));
				alert("someone won");
			}
		} else {
			alert("Dummkopf");
		}
	};

	useEffect(() => {
		if (gameSetting.players === "onePlayer") {
			if (!playerTurn) {
				let move = bestMove(
					board,
					gameSetting.opponentSign,
					gameSetting.playerSign
				);
				console.log(move);
				let newBoard = [...board];
				if (checkWinner(board) === null) {
					newBoard[move.row][move.col] = gameSetting.opponentSign;
					setBoard(newBoard);
					setPlayerTurn(!playerTurn);
				}
			}
		}
	}, [board]);

	return (
		<div className={showThis}>
			<p>
				Player {gameSetting.playerSign}: {gameScore.player} vs Player{" "}
				{gameSetting.opponentSign}:{gameScore.opponent}
			</p>
			<div className="board">
				{board.map((row, ind) => {
					return (
						<div className="row" id={ind} key={ind}>
							<div
								onClick={markTileTwoPlayer}
								id="0"
								className="tile"
							>
								{row[0]}
							</div>
							<div
								onClick={markTileTwoPlayer}
								id="1"
								className="tile"
							>
								{row[1]}
							</div>
							<div
								onClick={markTileTwoPlayer}
								id="2"
								className="tile"
							>
								{row[2]}
							</div>
						</div>
					);
				})}
			</div>
			<p>
				{playerTurn
					? `Player ${gameSetting.playerSign} turn`
					: `Player ${gameSetting.opponentSign}`}
			</p>
			<button onClick={() => resetAll()}>Reset all</button>
			<div>
				{renderMessage.ErrorMessage && (
					<ErrorMessage
						setRenderMessage={setRenderMessage}
					></ErrorMessage>
				)}
				{renderMessage.EndGameMessage && (
					<EndGameMessage
						setRenderMessage={setRenderMessage}
						winner={winner}
						setBoard={setBoard}
					></EndGameMessage>
				)}
			</div>
		</div>
	);
}

export default GameBoard;

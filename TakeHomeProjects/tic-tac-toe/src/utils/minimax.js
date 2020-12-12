const checkWinner = (board) => {
	let winner = null;
	const transpose = (m) => m[0].map((x, i) => m.map((x) => x[i]));
	let boardTransposed = transpose(board);

	// check horizontal
	board.forEach((row) => {
		if (row.every((v) => v === row[0] && v !== "")) {
			winner = row[0];
		}
	});

	// check vertical
	boardTransposed.forEach((row) => {
		if (row.every((v) => v === row[0] && v !== "")) {
			winner = row[0];
		}
	});

	// check diagonal
	if (
		board[0][0] === board[1][1] &&
		board[0][0] === board[2][2] &&
		board[0][0] !== ""
	) {
		winner = board[0][0];
	}
	if (
		board[0][2] === board[1][1] &&
		board[0][2] === board[2][0] &&
		board[0][2] !== ""
	) {
		winner = board[0][2];
	}

	//check open spots
	let openSpots = 0;
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (board[i][j] === "") {
				openSpots++;
			}
		}
	}

	if (winner === null && openSpots === 0) {
		return "tie";
	} else {
		return winner;
	}
};

function minimax(board, isMaximizing, ai, human) {
	let scores = {};
	scores["tie"] = 0;
	scores[ai] = 10;
	scores[human] = -10;
	console.log(scores);
	let result = checkWinner(board);
	if (result !== null) {
		return scores[result];
	}

	if (isMaximizing) {
		let bestScore = -Infinity;
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				// Is the spot available?
				if (board[i][j] === "") {
					board[i][j] = ai;
					let score = minimax(board, false, ai, human);
					board[i][j] = "";
					bestScore = Math.max(score, bestScore);
				}
			}
		}
		return bestScore;
	} else {
		let bestScore = Infinity;
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				// Is the spot available?
				if (board[i][j] === "") {
					board[i][j] = human;
					let score = minimax(board, true, ai, human);
					board[i][j] = "";
					bestScore = Math.min(score, bestScore);
				}
			}
		}
		return bestScore;
	}
}

function bestMove(board, ai, human) {
	let bestScore = -Infinity;
	let move;
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (board[i][j] === "") {
				board[i][j] = ai;
				let score = minimax(board, false, ai, human);
				board[i][j] = "";
				if (score > bestScore) {
					bestScore = score;
					move = { row: i, col: j };
				}
			}
		}
	}
	return move;
}

console.log(
	bestMove(
		[
			["○", "", ""],
			["", "○", ""],
			["○", "", ""],
		],
		"○",
		"⨉"
	)
);
// ⨉○
// [
// 		["⨉", "○", "○"],
// 		["○", "⨉", "○"],
// 		["○", "⨉", "○"],
// 	]

class Cell {
	constructor(row, col, board) {
		this.row = row;
		this.col = col;
		this.board = board;
		// this.newBoard = newBoard;
	}
	checkSurroundingCells = () => {
		let surroundingCells = [];

		if (this.col > 0) {
			surroundingCells.push(this.board[this.row][this.col - 1]); //left
		}
		if (this.col < this.board[this.row].length - 1) {
			surroundingCells.push(this.board[this.row][this.col + 1]); //right
		}
		if (this.row > 0) {
			surroundingCells.push(this.board[this.row - 1][this.col]); //up
		}
		if (this.row < this.board.length - 1) {
			surroundingCells.push(this.board[this.row + 1][this.col]); //down
		}

		if (this.row < this.board.length - 1 && this.col > 0) {
			surroundingCells.push(this.board[this.row + 1][this.col - 1]); //down-left
		}

		if (
			this.row < this.board.length - 1 &&
			this.col < this.board[this.row].length - 1
		) {
			surroundingCells.push(this.board[this.row + 1][this.col + 1]); //down-right
		}

		if (this.row > 0 && this.col > 0) {
			surroundingCells.push(this.board[this.row - 1][this.col - 1]); //up-left
		}

		if (this.row > 0 && this.col < this.board[this.row].length - 1) {
			surroundingCells.push(this.board[this.row - 1][this.col + 1]); //up-right
		}

		return surroundingCells;
	};

	nextGeneration(aliveCount, newBoard) {
		if (this.board[this.row][this.col] === "0" && aliveCount === 3) {
			newBoard[this.row][this.col] = "1";
		}

		if (this.board[this.row][this.col] === "1" && aliveCount < 2) {
			newBoard[this.row][this.col] = "0";
		}

		if (this.board[this.row][this.col] === "1" && aliveCount > 3) {
			newBoard[this.row][this.col] = "0";
		}
	}
}

export default Cell;

// const checkSurroundingCells = (i, j) => {
// 	let surroundingCells = [];

// 	if (j > 0) {
// 		surroundingCells.push(prevBoard[i][j - 1]); //left
// 	}
// 	if (j < prevBoard[i].length - 1) {
// 		surroundingCells.push(prevBoard[i][j + 1]); //right
// 	}
// 	if (i > 0) {
// 		surroundingCells.push(prevBoard[i - 1][j]); //up
// 	}
// 	if (i < prevBoard.length - 1) {
// 		surroundingCells.push(prevBoard[i + 1][j]); //down
// 	}

// 	if (i < prevBoard.length - 1 && j > 0) {
// 		surroundingCells.push(prevBoard[i + 1][j - 1]); //down-left
// 	}

// 	if (
// 		i < prevBoard.length - 1 &&
// 		j < prevBoard[i].length - 1
// 	) {
// 		surroundingCells.push(prevBoard[i + 1][j + 1]); //down-right
// 	}

// 	if (i > 0 && j > 0) {
// 		surroundingCells.push(prevBoard[i - 1][j - 1]); //up-left
// 	}

// 	if (i > 0 && j < prevBoard[i].length - 1) {
// 		surroundingCells.push(prevBoard[i - 1][j + 1]); //up-right
// 	}

// 	return surroundingCells;
// };
// let surroundingCells = checkSurroundingCells(i, j);

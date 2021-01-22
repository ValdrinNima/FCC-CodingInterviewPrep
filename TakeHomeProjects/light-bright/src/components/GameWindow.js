import React, { useEffect, useState } from "react";
import Cell from "./Cell";

const colorList = ["red", "blue", "green"];

function GameWindow({ cells, setCells, setColorIndex, colorIndex }) {
	const [mouseDown, setMouseDown] = useState(false);

	useEffect(() => {
		setCells((prevState) => {
			let result = [];
			for (let i = 0; i < 200; i++) {
				result.push("");
			}
			return result;
		});
	}, []);

	return (
		<div className="gamewindow-container">
			<div
				className="gamewindow-window"
				onMouseDown={() => {
					setMouseDown(() => true);
				}}
				onMouseUp={() => {
					setMouseDown(() => false);
					setColorIndex((prevState) => (prevState + 1) % 3);
				}}
			>
				{cells.map((color, ind) => {
					return (
						<Cell
							cells={cells}
							setCells={setCells}
							id={ind}
							mouseDown={mouseDown}
							setMouseDown={setMouseDown}
							setColorIndex={setColorIndex}
							colorIndex={colorIndex}
							key={ind}
						></Cell>
					);
				})}
			</div>
		</div>
	);
}

export default GameWindow;

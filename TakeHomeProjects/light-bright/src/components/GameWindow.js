import React, { useEffect, useState } from "react";
import Cell from "./Cell";

function GameWindow({ cells, setCells }) {
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
			<div className="gamewindow-window">
				{cells.map((cell, ind) => {
					return <Cell key={ind}></Cell>;
				})}
			</div>
		</div>
	);
}

export default GameWindow;

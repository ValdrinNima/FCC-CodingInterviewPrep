import React, { useState } from "react";

const colorList = ["red", "blue", "green"];

function Cell({ cells, setCells, setColorIndex, colorIndex, id, mouseDown }) {
	const changeColor = (cellIndex) => {
		setCells((prevState) => {
			let result = prevState.map((color, ind) =>
				ind === cellIndex ? colorList[colorIndex] : color
			);
			return result;
		});
	};

	const handleOnClick = (e) => {
		// changeColor(parseInt(e.target.id));
	};

	const handleOnMouseDown = (e) => {
		changeColor(parseInt(e.target.id));
	};

	const handleOnMouseOver = (e) => {
		if (mouseDown) {
			changeColor(parseInt(e.target.id));
		}
	};

	return (
		<div
			id={id}
			// onClick={(e) => handleOnClick(e)}
			onMouseDown={(e) => {
				handleOnMouseDown(e);
			}}
			onMouseOver={(e) => handleOnMouseOver(e)}
			className={"gamewindow-cell " + cells[id]}
		></div>
	);
}

export default Cell;

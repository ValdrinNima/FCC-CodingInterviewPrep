import React, { useState } from "react";

function Cell() {
	const [color, setColor] = useState("");
	const [mouseDown, setMouseDown] = useState(false);

	const handleOnClick = (e) => {
		setColor("red");
	};

	const handleOnMouseUp = (e) => {
		setMouseDown((prevState) => false);
		console.log(mouseDown);
	};

	const handleOnMouseDown = (e) => {
		setMouseDown((prevState) => true);
		setColor("red");
	};

	const handleOnMouseOver = (e) => {
		if (mouseDown) {
			setColor("red");
		}
	};
	return (
		<div
			onClick={(e) => handleOnClick(e)}
			onMouseDown={(e) => handleOnMouseDown(e)}
			onMouseOver={(e) => handleOnMouseOver(e)}
			onMouseUp={(e) => handleOnMouseUp(e)}
			className={"gamewindow-cell " + color}
		></div>
	);
}

export default Cell;

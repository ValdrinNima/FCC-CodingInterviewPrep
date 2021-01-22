import React, { useState } from "react";

function ControlPanel({ setCells, setColorIndex }) {
	const resetCells = () => {
		setCells((prevState) => {
			let result = [];
			for (let i = 0; i < 200; i++) {
				result.push("");
			}
			return result;
		});
	};

	const changeColorIndex = () => {
		setColorIndex((prevState) => (prevState + 1) % 3);
	};

	return (
		<div className="controlpanel-container">
			<div className="controlpanel-button_container">
				<button
					className="fas fa-redo fa-2x controlpanel-button"
					onClick={() => {
						resetCells();
					}}
				></button>
				<button
					className="fas fa-palette fa-2x controlpanel-button"
					onClick={() => {
						changeColorIndex();
					}}
				></button>
				<button className="fas fa-question fa-2x controlpanel-button"></button>
			</div>
		</div>
	);
}

export default ControlPanel;

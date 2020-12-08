import React, { useState, useEffect } from "react";
import "../App.css";

function ChooseMode({
	setGameSettings,
	shouldComponentsRender,
	setShouldComponentsRender,
}) {
	const showThis = shouldComponentsRender.ChooseMode
		? "menu-container display-block"
		: "menu-container display-none";

	return (
		<div className={showThis}>
			<p>How do you want to play?</p>
			<div className="pick-something">
				<p
					onClick={() => {
						setShouldComponentsRender({
							ChooseMode: false,
							ChooseSign: true,
							GameBoard: false,
						});
						setGameSettings({
							players: "onePlayer",
						});
					}}
				>
					One Player
				</p>
				<p
					onClick={() => {
						setShouldComponentsRender({
							ChooseMode: false,
							ChooseSign: true,
							GameBoard: false,
						});
						setGameSettings({
							players: "twoPlayer",
						});
					}}
				>
					Two Player
				</p>
			</div>
		</div>
	);
}

export default ChooseMode;

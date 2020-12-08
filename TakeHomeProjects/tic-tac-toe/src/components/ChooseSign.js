import React, { useState, useEffect } from "react";

function ChooseSign({
	setGameSettings,
	shouldComponentsRender,
	setShouldComponentsRender,
}) {
	const showThis = shouldComponentsRender.ChooseSign
		? "menu-container display-block"
		: "menu-container display-none";
	return (
		<div className={showThis}>
			<p>Would you like to be X or O?</p>
			<div className="pick-something">
				<p
					onClick={() => {
						setShouldComponentsRender({
							ChooseMode: false,
							ChooseSign: false,
							GameBoard: true,
						});
						setGameSettings((prevState) => ({
							...prevState,
							playerSign: "⨉",
							opponentSign: "○",
						}));
					}}
				>
					X
				</p>
				<p
					onClick={() => {
						setShouldComponentsRender({
							ChooseMode: false,
							ChooseSign: false,
							GameBoard: true,
						});
						setGameSettings((prevState) => ({
							...prevState,
							playerSign: "○",
							opponentSign: "⨉",
						}));
					}}
				>
					O
				</p>
			</div>
		</div>
	);
}

export default ChooseSign;

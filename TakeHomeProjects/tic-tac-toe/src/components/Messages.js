import React, { useState } from "react";

function ErrorMessage({ setRenderMessage }) {
	setTimeout(() => {
		setRenderMessage({ ErrorMessage: false, EndGameMessage: false });
	}, 1700);

	return <h2>You can't mark this tile</h2>;
}

function EndGameMessage({ setRenderMessage, winner, setBoard }) {
	setTimeout(() => {
		setRenderMessage({ ErrorMessage: false, EndGameMessage: false });
		setBoard([
			["", "", ""],
			["", "", ""],
			["", "", ""],
		]);
	}, 1700);

	return (
		<h2>
			{winner === "○"
				? "○ wins the game!"
				: winner === "⨉"
				? "⨉ wins the game"
				: "It's a draw"}
		</h2>
	);
}

export { ErrorMessage };
export { EndGameMessage };

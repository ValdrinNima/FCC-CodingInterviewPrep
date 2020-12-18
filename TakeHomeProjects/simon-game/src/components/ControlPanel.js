import React from "react";

function ControlPanel({ setGameState, gameState }) {
	const displayCount = (count) => {
		if (!gameState.power) {
			return "--";
		} else {
			if (count % 10 !== 0) {
				return `0${count}`;
			} else {
				return `${count}`;
			}
		}
	};

	return (
		<div className="control-panel-container">
			<h1>
				Simon<span className="trademark">&reg;</span>
			</h1>
			<div className="control-panel">
				<div className="count-screen">
					<p>{displayCount(gameState.count)}</p>
				</div>
				<button
					disabled={!gameState.power}
					onClick={() =>
						setGameState((prevState) => ({
							...prevState,
							start: !prevState.start,
						}))
					}
					className={
						gameState.start
							? "button-start start-on"
							: "button-start"
					}
				></button>
				<button
					disabled={!gameState.power}
					onClick={() =>
						setGameState((prevState) => ({
							...prevState,
							strict: !prevState.strict,
						}))
					}
					className={
						gameState.strict
							? "button-strict strict-on"
							: "button-strict"
					}
				></button>
				<p
					className="button-power"
					onClick={() =>
						setGameState((prevState) => ({
							...prevState,
							power: !prevState.power,
						}))
					}
				></p>
			</div>
		</div>
	);
}

export default ControlPanel;

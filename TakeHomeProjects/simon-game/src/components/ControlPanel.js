import React, { useEffect, useState } from "react";

function ControlPanel({
	setGameState,
	gameState,
	setGameSeries,
	setPlayerSeries,
}) {
	const [controlPanelMessage, setControlPanelMessage] = useState("");
	const [switchClick, setSwitchClick] = useState(false);

	const displayCount = (count) => {
		if (!gameState.power) {
			return "--";
		} else {
			if (count % 10 !== 0) {
				return `0${count}`;
			} else if (count === 0) {
				return "00";
			} else {
				return `${count}`;
			}
		}
	};

	useEffect(() => {
		if (gameState.playerError) {
			setControlPanelMessage("❌");
		}
	}, [gameState]);

	return (
		<div className="control-panel-container">
			<h1>
				Simon<span className="trademark">&reg;</span>
			</h1>
			<div className="control-panel">
				<div className="count-screen">
					<p
						onAnimationEnd={() => {
							setControlPanelMessage(
								displayCount(gameState.count)
							);
						}}
						className={`count-message" ${
							gameState.playerError ? " error" : ""
						}`}
					>
						{gameState.playerError
							? controlPanelMessage
							: displayCount(gameState.count)}
					</p>
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
					onClick={() => {
						setSwitchClick((prevState) => !prevState);
						setGameState((prevState) => ({
							...prevState,
							power: !prevState.power,
							start: false,
							strict: false,
							count: 0,
							playerTurn: false,
							playerIndex: 0,
							playerError: false,
						}));
						setGameSeries([]);
						setPlayerSeries([]);
					}}
				>
					<div
						className={
							switchClick
								? "control-panel-switch switch-on"
								: "control-panel-switch "
						}
					></div>
				</p>
			</div>
		</div>
	);
}

export default ControlPanel;

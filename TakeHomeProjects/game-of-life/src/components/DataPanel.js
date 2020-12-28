import React from "react";
import { gameLoop } from "../App";

function DataPanel({
	setBoard,
	setGameState,
	setGeneration,
	gameState,
	generation,
}) {
	return (
		<div className="data-panel">
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div>
					<p>Generation</p>
					<p>{generation}</p>
				</div>
				<div>
					<p>Speed</p>
					<p>{(1000 - gameState.speed) / 100}</p>
					<div className="slide-container">
						<input
							disabled={gameState.isRunning}
							onChange={(e) => {
								setGameState((prevState) => {
									console.log(e.target.value);
									let speed =
										1000 - 100 * parseInt(e.target.value);
									return {
										...prevState,
										speed,
									};
								});
							}}
							type="range"
							min="1"
							max="10"
							className="slider"
						></input>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DataPanel;

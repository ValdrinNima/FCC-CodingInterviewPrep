import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [gameState, setGameState] = useState({
		power: false,
		start: false,
		strict: false,
		count: 0,
	});
	const [audio, setAudio] = useState({
		green: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
		red: " https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
		yellow: " https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
		blue: " https://s3.amazonaws.com/freecodecamp/simonSound4.mp3",
	});
	const [playerSeries, setPlayerSeries] = useState();
	const [gameSeries, setGameSeries] = useState();

	const playAudio = (e) => {
		let color = e.target.className.split("-")[1];
		console.log(color);
		let sound = new Audio(audio[color]);
		sound.play();
	};

	const playError = () => {
		return;
	};

	return (
		<div className="wrapper">
			<div className="control-panel-container">
				<h1>
					Simon<span className="trademark">&reg;</span>
				</h1>
				<div className="control-panel">
					<div className="count-screen">
						<p>--</p>
					</div>
					<button
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
					<p className="button-power"></p>
				</div>
			</div>
			<div className="game-container">
				<button onClick={playAudio} className="button-green"></button>
				<button onClick={playAudio} className="button-red"></button>
				<button onClick={playAudio} className="button-yellow"></button>
				<button onClick={playAudio} className="button-blue"></button>
			</div>
		</div>
	);
}

export default App;

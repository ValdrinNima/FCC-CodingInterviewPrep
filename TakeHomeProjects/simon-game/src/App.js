import React, { useState, useEffect, useRef } from "react";
import ControlPanel from "./components/ControlPanel";
import Button from "./components/Button";
import "./App.css";

function App() {
	const greenButton = useRef();
	const redButton = useRef();
	const yellowButton = useRef();
	const blueButton = useRef();
	const [clickAnimation, setClickAnimation] = useState({
		"green-clicked": false,
		"red-clicked": false,
		"yellow-clicked": false,
		"blue-clicked": false,
	});
	const buttonReferences = {
		green: greenButton,
		red: redButton,
		yellow: yellowButton,
		blue: blueButton,
	};
	const [gameState, setGameState] = useState({
		power: false,
		start: false,
		strict: false,
		count: 0,
		playerTurn: false,
	});
	const [audio, setAudio] = useState({
		green: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
		red: " https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
		yellow: " https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
		blue: " https://s3.amazonaws.com/freecodecamp/simonSound4.mp3",
	});
	const [playerSeries, setPlayerSeries] = useState([]);
	const [gameSeries, setGameSeries] = useState([
		"lets goooo",
		"green",
		"yellow",
		"blue",
		"red",
		"yellow",
		"green",
		"green",
		"yellow",
	]);

	const playAudio = (e) => {
		let color = e.target.id;
		// if (gameState.playerTrun) {
		// 	setPlayerSeries((prevState) => {
		// 		let result = [...prevState];
		// 		result.push(color);
		// 		console.log("Hello");
		// 		return result;
		// 	});
		// }
		console.log(color);
		console.log(playerSeries);
		let sound = new Audio(audio[color]);
		sound.play();
	};

	const computerMove = (colorArray) => {
		console.log(colorArray);
		for (let i = 0; i < colorArray.length; i++) {
			computerExecuteMove(i);
		}
		function computerExecuteMove(i) {
			setTimeout(function () {
				switch (colorArray[i]) {
					case "green":
						greenButton.current.click();
						break;
					case "red":
						redButton.current.click();
						break;
					case "yellow":
						yellowButton.current.click();
						break;
					case "blue":
						blueButton.current.click();
						break;
					default:
						console.log("Wrong color");
				}

				// On the last button press update gameState
				if (i + 1 === colorArray.length) {
					setGameState((prevState) => {
						return {
							...prevState,
							playerTurn: !prevState.playerTurn,
							count:
								prevState.count % 10 === 0
									? "0" + prevState.count.toString()
									: prevState.count.toString(),
						};
					});
				}
			}, 1500 * i);
		}
	};

	useEffect(() => {
		if (gameState.start && !gameState.playerTurn) {
			// Add a new color to the gameSeries
			setGameSeries((prevState) => {
				const colorArray = ["green", "red", "yellow", "blue"];
				let newColor =
					colorArray[Math.floor(Math.random() * colorArray.length)];
				return [...prevState, newColor];
			});
			// After adding new button computer plays series
			computerMove(gameSeries);
		}
	}, [gameState]);

	useEffect(() => {
		// if (gameState.start && gameState.playerTurn) {
		// 	function playerTookTooLong() {
		// 		alert("HELLOOOOO PLAYY ");
		// 	}
		// 	let timer = setTimeout(playerTookTooLong, 5000);
		// }
	}, [gameState, playerSeries]);

	return (
		<div className="wrapper">
			<ControlPanel
				setGameState={setGameState}
				gameState={gameState}
			></ControlPanel>
			<div className="game-container">
				{["green", "red", "yellow", "blue"].map((color) => {
					return (
						<Button
							setClickAnimation={setClickAnimation}
							clickAnimation={clickAnimation}
							setPlayerSeries={setPlayerSeries}
							playAudio={playAudio}
							gameState={gameState}
							key={color}
							color={color}
							ref={buttonReferences[color]}
						></Button>
					);
				})}
			</div>
		</div>
	);
}

export default App;

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
		playerIndex: 0,
		playerError: false,
	});
	const [audio, setAudio] = useState({
		green: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
		red: " https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
		yellow: " https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
		blue: " https://s3.amazonaws.com/freecodecamp/simonSound4.mp3",
	});
	const [playerSeries, setPlayerSeries] = useState([]);
	const [gameSeries, setGameSeries] = useState([
		// "green",
		// "blue",
		// "yellow",
		// "blue",
		// "blue",
		// "red",
		// "red",
	]);
	const playerInput = useRef(0);

	let arraysMatch = function (arr1, arr2) {
		if (arr1.length !== arr2.length) return false;
		for (let i = 0; i < arr1.length; i++) {
			if (arr1[i] !== arr2[i]) return false;
		}
		return true;
	};

	const addNewColor = () => {
		let newArray;
		let colors = ["green", "red", "yellow", "blue"];
		let newColor = colors[Math.floor(Math.random() * colors.length)];
		let oldArray = [...gameSeries];
		newArray = [...oldArray, newColor];
		setGameSeries(newArray);
		return newArray;
	};

	const playAudio = (e) => {
		let color = e.target.id;
		console.log(color);
		console.log(playerSeries);
		let sound = new Audio(audio[color]);
		sound.play();
	};

	function playerTookTooLong() {
		alert("HELLOOOOO PLAYY ");
	}

	const computerMove = (colorArray) => {
		for (let i = 0; i < colorArray.length; i++) {
			let delay = 0;
			// If player made an error add a delay
			if (gameState.playerError) {
				delay = 1500;
			}
			computerExecuteMove(i, delay);
		}
		function computerExecuteMove(i, delay) {
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
					console.log("This is " + !gameState.playerError);
					if (!gameState.playerError) {
						setGameState((prevState) => {
							return {
								...prevState,
								playerTurn: !prevState.playerTurn,
							};
						});
					} else {
						setGameState((prevState) => {
							return {
								...prevState,
								playerTurn: !prevState.playerTurn,
								playerError: false,
								count: prevState.count,
							};
						});
					}
				}
			}, 1500 * (i + 1) + delay);
		}
	};

	useEffect(() => {
		if (gameState.start && !gameState.playerTurn) {
			let newArray;
			if (!gameState.playerError || gameSeries.length === 0) {
				newArray = addNewColor();
			} else {
				newArray = [...gameSeries];
			}
			console.log(newArray);
			// After adding new button computer plays series
			computerMove(newArray);
		}
	}, [gameState]);

	useEffect(() => {
		if (gameState.playerTurn) {
			// set a timout for inactivity
			// let timer = setTimeout(() => {
			// 	alert("aYYY WHat up");
			// }, 2000);

			// Check if count is 20
			if (gameState.count === 20) {
				alert("You won");
			}

			// Increase playerIndex by one
			setGameState((prevState) => ({
				...prevState,
				playerIndex: prevState.playerIndex + 1,
			}));

			playerInput.current = playerInput.current + 1;

			// Runs everytime player presses button when players turn

			// did player enter color correctly
			if (
				gameSeries[gameState.playerIndex] ===
				playerSeries[gameState.playerIndex]
			) {
				console.log("correct");
				// clearTimeout(timer);
			}
			// STRICT MODE
			else if (gameState.strict) {
				console.log("INCORRECT");
				// clearTimeout(timer);
				setPlayerSeries((prevState) => Array(0));
				setGameSeries([]);
				setGameState((prevState) => ({
					...prevState,
					count: 0,
					playerError: true,
					playerIndex: 0,
					playerTurn: !prevState.playerTurn,
				}));
			} else {
				setPlayerSeries((prevState) => []);
				setGameState((prevState) => ({
					...prevState,
					playerError: true,
					playerIndex: 0,
					playerTurn: !prevState.playerTurn,
				}));
			}

			// Did player enter all colors correctly
			if (arraysMatch(playerSeries, gameSeries)) {
				setPlayerSeries((prevState) => []);
				setGameState((prevState) => ({
					...prevState,
					playerError: false,
					playerIndex: 0,
					playerTurn: !prevState.playerTurn,
					count: prevState.count + 1,
				}));
			}
		}
	}, [playerSeries]);

	return (
		<div className="wrapper">
			<ControlPanel
				setGameState={setGameState}
				gameState={gameState}
				setGameSeries={setGameSeries}
				setPlayerSeries={setPlayerSeries}
			></ControlPanel>
			<div className="game-container">
				{["green", "red", "yellow", "blue"].map((color) => {
					return (
						<Button
							setClickAnimation={setClickAnimation}
							clickAnimation={clickAnimation}
							setPlayerSeries={setPlayerSeries}
							playerSeries={playerSeries}
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

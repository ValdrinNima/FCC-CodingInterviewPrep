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
	const buttonRefrences = {
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
		"blue",
		"red",
		"yellow",
		"blue",
	]);

	const playAudio = (e) => {
		let color = e.target.id;
		let sound = new Audio(audio[color]);
		sound.play();
	};

	const computerMove = (colorArray) => {
		console.log(colorArray);
		for (let i = 1; i <= colorArray.length; i++) {
			computerExecuteMove(i);
		}
		function computerExecuteMove(i) {
			setTimeout(function () {
				switch (colorArray[i - 1]) {
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
			}, 1500 * i);
		}
	};

	const playError = () => {
		return;
	};

	useEffect(() => {
		if (gameState.start && !gameState.playerTurn) {
			setGameSeries((prevState) => {
				const colorArray = ["green", "red", "yellow", "blue"];
				let newColor =
					colorArray[Math.floor(Math.random() * colorArray.length)];
				computerMove([...prevState, newColor]);
				return [...prevState, newColor];
			});
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
		if (gameState.start && gameState.playerTurn) {
			function playerTookTooLong() {
				alert("HELLOOOOO PLAYY ");
			}
			let timer = setTimeout(playerTookTooLong, 5000);
		}
	}, [gameState, playerSeries]);

	// useEffect(() => {
	// 	if (gameState.start && gameState.playerTurn) {
	// 		let timer = setTimeout(playerTookTooLong, 5000);
	// 	}
	// }, [playerSeries]);

	return (
		<div className="wrapper">
			<ControlPanel
				setGameState={setGameState}
				gameState={gameState}
			></ControlPanel>
			<div className="game-container">
				{/* {["green", "red", "yellow", "blue"].map((color) => {
					return (
						<Button
							key={color }
							color={color}
							playAudio={playAudio}
							gameState={gameState}
							ref={buttonRefrences[color]}
						></Button>
					);
				})} */}
				<button
					id="green"
					disabled={!gameState.playerTurn}
					ref={greenButton}
					className={
						clickAnimation["green-clicked"]
							? "button-green clicked"
							: "button-green"
					}
					onClick={(e) => {
						playAudio(e);
						setClickAnimation((prevState) => ({
							...prevState,
							"green-clicked": true,
						}));
					}}
					onAnimationEnd={() => {
						setClickAnimation((prevState) => ({
							...prevState,
							"green-clicked": false,
						}));
					}}
				></button>
				<button
					id="red"
					disabled={!gameState.playerTurn}
					ref={redButton}
					onClick={(e) => {
						playAudio(e);
						setClickAnimation((prevState) => ({
							...prevState,
							"red-clicked": true,
						}));
					}}
					onAnimationEnd={() => {
						setClickAnimation((prevState) => ({
							...prevState,
							"red-clicked": false,
						}));
					}}
					className={
						clickAnimation["red-clicked"]
							? "button-red clicked"
							: "button-red "
					}
				></button>
				<button
					id="yellow"
					disabled={!gameState.playerTurn}
					ref={yellowButton}
					onClick={(e) => {
						playAudio(e);
						setClickAnimation((prevState) => ({
							...prevState,
							"yellow-clicked": true,
						}));
					}}
					onAnimationEnd={() => {
						setClickAnimation((prevState) => ({
							...prevState,
							"yellow-clicked": false,
						}));
					}}
					className={
						clickAnimation["yellow-clicked"]
							? "button-yellow clicked"
							: "button-yellow"
					}
				></button>
				<button
					id="blue"
					disabled={!gameState.playerTurn}
					ref={blueButton}
					onClick={(e) => {
						playAudio(e);
						setClickAnimation((prevState) => ({
							...prevState,
							"blue-clicked": true,
						}));
					}}
					onAnimationEnd={() => {
						setClickAnimation((prevState) => ({
							...prevState,
							"blue-clicked": false,
						}));
					}}
					className={
						clickAnimation["blue-clicked"]
							? "button-blue clicked"
							: "button-blue"
					}
				></button>
			</div>
		</div>
	);
}

export default App;

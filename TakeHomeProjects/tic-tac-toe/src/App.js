import React, { useState, useEffect } from "react";
import "./App.css";
import ChooseMode from "./components/ChooseMode";
import ChooseSign from "./components/ChooseSign";
import GameBoard from "./components/GameBoard";

function App() {
	const [shouldComponentsRender, setShouldComponentsRender] = useState({
		ChooseMode: true,
		ChooseSign: false,
		GameBoard: false,
	});
	const [gameSetting, setGameSettings] = useState({});
	return (
		<div className="wrapper">
			<ChooseMode
				setGameSettings={setGameSettings}
				shouldComponentsRender={shouldComponentsRender}
				setShouldComponentsRender={setShouldComponentsRender}
			></ChooseMode>
			<ChooseSign
				setGameSettings={setGameSettings}
				shouldComponentsRender={shouldComponentsRender}
				setShouldComponentsRender={setShouldComponentsRender}
			></ChooseSign>
			<GameBoard
				gameSetting={gameSetting}
				shouldComponentsRender={shouldComponentsRender}
				setGameSettings={setGameSettings}
				setShouldComponentsRender={setShouldComponentsRender}
			></GameBoard>
		</div>
	);
}

export default App;

import React, { useState, useEffect } from "react";
import GameWindow from "./components/GameWindow";
import ControlPanel from "./components/ControlPanel";

import "./App.css";

function App() {
	const [cells, setCells] = useState([]);
	const [colorIndex, setColorIndex] = useState(0);

	return (
		<div className="wrapper">
			<header>
				<h1 className="title">Light-Bright App </h1>
			</header>
			<GameWindow
				cells={cells}
				setCells={setCells}
				colorIndex={colorIndex}
				setColorIndex={setColorIndex}
			></GameWindow>
			<ControlPanel
				setColorIndex={setColorIndex}
				setCells={setCells}
			></ControlPanel>
		</div>
	);
}

export default App;

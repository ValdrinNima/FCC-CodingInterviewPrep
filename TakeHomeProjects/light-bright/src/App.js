import React, { useState, useEffect } from "react";
import GameWindow from "./components/GameWindow";
import ControlPanel from "./components/ControlPanel";

import "./App.css";

function App() {
	const [cells, setCells] = useState([]);

	return (
		<div>
			<div className="wrapper">
				<header>
					<h1 className="title">Light-Bright App </h1>
				</header>
				<GameWindow cells={cells} setCells={setCells}></GameWindow>
				<ControlPanel></ControlPanel>
				<footer>
					<h3 className="footer-text">Made by Valdrin N.</h3>
				</footer>
			</div>
		</div>
	);
}

export default App;

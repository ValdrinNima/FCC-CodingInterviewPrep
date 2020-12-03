import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function ChooseMode() {
	const [gameMode, setGameMode] = useState();

	return (
		<div className="wrapper">
			<div className="menu-container">
				<p>How do you want to play?</p>
				<div className="pick-something">
					<Link to="/chooseSign">
						<p onClick={() => setGameMode("onePlayer")}>
							One Player
						</p>
					</Link>
					<Link to="/chooseSign">
						<p onClick={() => setGameMode("twoPlayer")}>
							Two Player
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ChooseMode;

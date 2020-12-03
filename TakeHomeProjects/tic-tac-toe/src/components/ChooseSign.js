import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ChooseSign() {
	const [sign, setSign] = useState();

	return (
		<div className="wrapper">
			<div className="menu-container">
				<p>Would you like to be X or O?</p>
				<div className="pick-something">
					<Link to="gameBoard">
						<p>X</p>
					</Link>
					<Link to="gameBoard">
						<p>O</p>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ChooseSign;

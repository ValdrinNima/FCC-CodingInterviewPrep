import React, { useState, useEffect } from "react";
import { crazyCorners, pentadecathlon } from "../utils/patterns";
import { patterns } from "../utils/patterns";
import { gameLoop } from "../App";

function PatternMenu({ setBoard, setGameState, setGeneration, setShowPatternMenu }) {
	return (
		<div className="pattern-menu-container">
			<div className="pattern-menu">
				<ul>
					{" "}
					{Object.keys(patterns).map((pattern) => {
						return (
							<li
								key={pattern}
								onClick={(e) => {
									clearInterval(gameLoop);
									setGeneration(0);
									setBoard(patterns[pattern]);
									setGameState((prevState) => {
										return {
											...prevState,
											isRunning: false,
										};
									});
								}}
							>
								{pattern}
							</li>
						);
					})}
                    <li onClick={() => setShowPatternMenu(prevState=> !prevState)}>Close</li>
				</ul>
			</div>
		</div>
	);
}

export default PatternMenu;

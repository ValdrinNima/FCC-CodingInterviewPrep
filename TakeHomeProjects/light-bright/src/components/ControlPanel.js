import React, { useState } from "react";

function ControlPanel() {
	return (
		<div className="controlpanel-container">
			<div className="controlpanel-button_container">
				<button className="fas fa-redo fa-2x controlpanel-button"></button>
				<button className="fas fa-palette fa-2x controlpanel-button"></button>
				<button className="fas fa-question fa-2x controlpanel-button"></button>
			</div>
		</div>
	);
}

export default ControlPanel;

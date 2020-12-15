import React, { useState } from "react";

function Button({ color, playAudio, gameState, ref }) {
	return (
		<button
			id={color}
			disabled={!gameState.playerMove}
			ref={ref}
			onClick={playAudio}
			className={"button-" + color}
		></button>
	);
}

export default Button;

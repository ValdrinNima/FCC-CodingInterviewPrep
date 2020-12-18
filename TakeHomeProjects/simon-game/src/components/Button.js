import React from "react";

const Button = React.forwardRef((props, ref) => {
	const {
		color,
		playAudio,
		gameState,
		clickAnimation,
		setClickAnimation,
		setPlayerSeries,
		playerSeries,
	} = props;

	const addToPlayerSeries = (e) => {
		setPlayerSeries((prevState) => {
			let result = [...prevState];
			result.push(e.target.id);
			return result;
		});
	};

	return (
		<button
			id={color}
			disabled={!gameState.power && !gameState.playerTurn}
			ref={ref}
			className={
				clickAnimation[color + "-clicked"]
					? "button-" + color + " clicked"
					: "button-" + color
			}
			onClick={(e) => {
				gameState.playerTurn && addToPlayerSeries(e);
				playAudio(e);
				setClickAnimation((prevState) => {
					let animation = `${color}-clicked`;
					let result = { ...prevState };
					result[animation] = true;
					return result;
				});
			}}
			onAnimationEnd={() => {
				setClickAnimation((prevState) => {
					let animation = `${color}-clicked`;
					let result = { ...prevState };
					result[animation] = false;
					return result;
				});
			}}
		></button>
	);
});

export default Button;

import React from "react";

const Button = React.forwardRef((props, ref) => {
	const {
		color,
		playAudio,
		gameState,
		clickAnimation,
		setClickAnimation,
		setPlayerSeries,
	} = props;

	const addToPlayerSeries = (e) => {
		setPlayerSeries((prevState) => {
			let result = [...prevState];
			result.push(e.target.id);
			console.log("Hello");
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
				console.log(ref.current);
				playAudio(e);
				console.log(e.target.className);
				gameState.playerTurn && addToPlayerSeries(e);
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

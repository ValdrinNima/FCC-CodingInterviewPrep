import React, { useState } from "react";

function RecipeAdder({
	setRecipeList,
	setShowAdder,
	setSelectedRecipe,
	recipeList,
}) {
	// state with old and new recipe
	const [newTitle, setNewTitle] = useState();
	const [newIngredients, setNewIngredients] = useState();
	const [newDirections, setNewDirections] = useState();

	const formatInput = (input) => {
		if (input[0] === "-") {
			input = input.slice(1);
		}

		let result = input.split("\n-");
		return result;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let alreadyExists = false;
		recipeList.forEach((item) => {
			if (item.name === newTitle) {
				alreadyExists = true;
				return alert("This recipe already exists");
			}
		});
		if (!alreadyExists) {
			let updatedRecipe = {
				name: newTitle,
				ingredients: newIngredients || [""],
				directions: newDirections || [""],
			};

			setRecipeList((prevState) => {
				return [...prevState, updatedRecipe];
			});
			setSelectedRecipe(updatedRecipe.name);
			setShowAdder(false);
		}
	};

	return (
		<div>
			<h2>Add Recipe</h2>
			{/* <i className="fas fa-times fa-2x"></i> */}
			<form onSubmit={(e) => handleSubmit(e)}>
				<h3>Recipe</h3>
				<textarea
					placeholder="Recipe Name"
					onChange={(e) => {
						setNewTitle(e.target.value);
					}}
				></textarea>
				<h3>Ingredients</h3>
				<textarea
					placeholder={
						"Prepend each ingredient with a '-' and seperate with a new line\n\n-Milk↩\n-Eggs↩"
					}
					onChange={(e) => {
						setNewIngredients(formatInput(e.target.value));
					}}
				></textarea>
				<h3>Directions</h3>
				<textarea
					placeholder={
						"Prepend each direction with a '-' and seperate with a new line\n\n-Preheat oven...↩\n-Combine ingredients↩"
					}
					onChange={(e) => {
						setNewDirections(formatInput(e.target.value));
					}}
				></textarea>
				<div>
					<button type="submit">Save</button>
					<button
						onClick={() => {
							setShowAdder(false);
						}}
					>
						Close
					</button>
				</div>
			</form>
		</div>
	);
}

export default RecipeAdder;

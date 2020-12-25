import React, { useState } from "react";

function RecipeEditor({
	recipeList,
	setRecipeList,
	recipe,
	setShowEditor,
	setSelectedRecipe,
}) {
	// state with old and new recipe
	const [newTitle, setNewTitle] = useState(recipe.name);
	const [newIngredients, setNewIngredients] = useState(recipe.ingredients);
	const [newDirections, setNewDirections] = useState(recipe.directions);

	const formatInput = (input) => {
		if (input[0] === "-") {
			input = input.slice(1);
		}

		let result = input.split("\n-");
		return result;
	};

	const parseInput = (input) => {
		let result = "-" + input.join("\n-");

		return result;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let updatedRecipe = {
			name: newTitle,
			ingredients: newIngredients,
			directions: newDirections,
		};

		setRecipeList((prevState) => {
			let newState = prevState.map((item) =>
				item.name === recipe.name ? updatedRecipe : item
			);
			return newState;
		});
		setSelectedRecipe(updatedRecipe.name);
		setShowEditor(false);
	};

	return (
		<div
			className="recipeeditor-wrapper"
			onClick={() => setShowEditor(false)}
		>
			<div className="recipeeditor-container">
				<h2>Edit Recipe</h2>
				{/* <i className="fas fa-times fa-2x"></i> */}
				<form onSubmit={(e) => handleSubmit(e)}>
					<h3>Recipe</h3>
					<textarea
						value={newTitle}
						onChange={(e) => {
							setNewTitle(e.target.value);
						}}
					></textarea>
					<h3>Ingredients</h3>
					<textarea
						value={parseInput(newIngredients)}
						onChange={(e) => {
							setNewIngredients(formatInput(e.target.value));
						}}
					></textarea>
					<h3>Directions</h3>
					<textarea
						value={parseInput(newDirections)}
						onChange={(e) => {
							setNewDirections(formatInput(e.target.value));
						}}
					></textarea>
					<div>
						<button type="submit">Save</button>
						<button
							onClick={() => {
								setShowEditor(false);
							}}
						>
							Close
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default RecipeEditor;

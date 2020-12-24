import React, { useEffect, useState } from "react";

function RecipeWindow({
	recipeList,
	selectedRecipe,
	recipe,
	setRecipeList,
	setSelectedRecipe,
}) {
	useEffect(() => {}, [selectedRecipe]);

	const deleteRecipe = () => {
		setRecipeList((prevState) => {
			let newState = prevState.filter((deleteRecipe) =>
				recipe.name === deleteRecipe.name ? false : true
			);
			console.log(newState);
			let newSelectedRecipe = newState[0] ? newState[0].name : "";
			setSelectedRecipe(newSelectedRecipe);
			return newState;
		});
	};

	const editRecipe = () => {};

	return (
		<div className="recipewindow-container">
			<div className="recipewindow-header">
				<h2>{recipe ? recipe.name : ""}</h2>
				<div>
					<i
						onClick={() => deleteRecipe()}
						className="fas fa-trash fa-2x"
					></i>
					<i
						onClick={() => editRecipe()}
						className="fas fa-edit fa-2x"
					></i>
				</div>
			</div>
			<div className="recipe-text">
				<h3>Ingredients</h3>
				<ul className="recipe-ingredients">
					{recipe
						? recipe.ingredients.map((ingredient, ind) => (
								<li key={ind}>{ingredient}</li>
						  ))
						: ""}
				</ul>
				<h3>Directions</h3>
				<ul className="recipe-directions">
					{recipe
						? recipe.directions.map((directions, ind) => (
								<li key={ind}>{directions}</li>
						  ))
						: ""}
				</ul>
			</div>
			<div className="recipewindow-footer">
				<i className="fas fa-plus-square fa-2x"></i>
			</div>
		</div>
	);
}

export default RecipeWindow;

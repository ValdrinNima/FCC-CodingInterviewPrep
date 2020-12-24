import React from "react";

function RecipeAdder() {
	// state with old and new recipe
	return (
		<div>
			<h2>Add Recipe</h2>
			<i className="fas fa-times fa-2x"></i>
			<h3>Recipe</h3>
			<h3>Ingredients</h3>
			<h3>Directions</h3>
			<div>
				<button>Add</button>
				<button>Close</button>
			</div>
		</div>
	);
}

export default RecipeAdder;

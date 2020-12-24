import React from "react";

function RecipeEditor() {
	// state with old and new recipe
	return (
		<div>
			<h2>Edit Recipe</h2>
			<i className="fas fa-times fa-2x"></i>
			<h3>Recipe</h3>
			<h3>Ingredients</h3>
			<h3>Directions</h3>
			<div>
				<button>Save</button>
				<button>Close</button>
			</div>
		</div>
	);
}

export default RecipeEditor;

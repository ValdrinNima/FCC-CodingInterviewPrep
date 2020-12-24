import React from "react";

function RecipeList({ recipeList, setSelectedRecipe }) {
	const selectRecipe = (e) => {
		setSelectedRecipe(e.target.innerText);
	};

	return (
		<div className="recipelist-container">
			<ul className="recipelist-list">
				{recipeList.map((recipe, ind) => {
					return (
						<li
							onClick={(e) => {
								selectRecipe(e);
							}}
							key={ind}
							className="recipelist-item"
						>
							{recipe.name}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default RecipeList;

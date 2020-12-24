import React, { useState, useEffect } from "react";
import "./App.css";
import RecipeIndex from "./componets/RecipeIndex";
import RecipeWindow from "./componets/RecipeWindow.js";
import RecipeEditor from "./componets/RecipeEditor.js";

function App() {
	// Recipe = {name: "bla", ingredients: [...], directions: [...]}
	const [recipeList, setRecipeList] = useState([
		{
			name: "Garlic Chicken",
			ingredients: ["butter", "1TS salt", "garlic"],
			directions: ["melt butter", "add chicken"],
		},
		{
			name: "Lime Chicken",
			ingredients: ["lime", "1TS salt", "1/2 skinless chicken "],
			directions: [
				"Saute chicken in a medium saucepan ov",
				"eat an iron skillet over m",
			],
		},
		{
			name: "Artichoke Dip",
			ingredients: [
				"1 8oz package soft cream cheese",
				"4oz mayonnaise",
				"garlic",
			],
			directions: [
				"Soften the cream cheese before mixing.",
				"Rinse well, then dice the artichokes into small ½” size pieces.",
			],
		},
	]);
	const [showEditor, setShowEditor] = useState(false);
	const [selectedRecipe, setSelectedRecipe] = useState("Garlic Chicken");

	const getRecipeFromList = (name) => {
		let recipeWeWant = recipeList.filter((recipe) =>
			recipe.name === name ? true : false
		);
		return recipeWeWant[0];
	};

	useEffect(() => {}, [selectedRecipe]);

	return (
		<div className="wrapper">
			<header className="header-container">
				<h1 className="header-title">Hello World</h1>
			</header>
			{showEditor && <RecipeEditor></RecipeEditor>}
			<main className="main-container">
				<RecipeIndex
					recipeList={recipeList}
					setSelectedRecipe={setSelectedRecipe}
				></RecipeIndex>
				<RecipeWindow
					setRecipeList={setRecipeList}
					setSelectedRecipe={setSelectedRecipe}
					recipeList={recipeList}
					selectedRecipe={selectedRecipe}
					recipe={getRecipeFromList(selectedRecipe)}
				></RecipeWindow>
			</main>
			<footer className="footer-container"></footer>
		</div>
	);
}

export default App;

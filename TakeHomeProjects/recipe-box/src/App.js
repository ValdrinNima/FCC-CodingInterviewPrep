import React, { useState, useEffect } from "react";
import RecipeIndex from "./componets/RecipeIndex";
import RecipeWindow from "./componets/RecipeWindow.js";
import RecipeEditor from "./componets/RecipeEditor.js";
import RecipeAdder from "./componets/RecipeAdder.js";
import "./App.css";

function App() {
	// Recipe = {name: "bla", ingredients: [...], directions: [...]}
	const [recipeList, setRecipeList] = useState(() => {
		let parsedLocalStorageRecipes;
		let localStorageRecipes = localStorage.getItem("recipe_box_storage");
		if (!localStorageRecipes) {
			let defaultRecipes = [
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
			];

			let parsedDefaultRecipes = JSON.stringify(defaultRecipes);

			localStorage.setItem("recipe_box_storage", parsedDefaultRecipes);

			return [...defaultRecipes];
		} else {
			parsedLocalStorageRecipes = JSON.parse(localStorageRecipes);
			return [...parsedLocalStorageRecipes];
		}
	});
	const [showEditor, setShowEditor] = useState(false);
	const [showAdder, setShowAdder] = useState(false);
	const [selectedRecipe, setSelectedRecipe] = useState("Garlic Chicken");

	const getRecipeFromList = (name) => {
		console.log(recipeList);
		let recipeWeWant = recipeList.filter((recipe) =>
			recipe.name === name ? true : false
		);
		return recipeWeWant[0];
	};

	useEffect(() => {
		localStorage.setItem("recipe_box_storage", JSON.stringify(recipeList));
	}, [recipeList]);

	return (
		<>
			<div className="wrapper">
				<header className="header-container">
					<h1 className="header-title">Hello World</h1>
				</header>
				{showEditor && (
					<RecipeEditor
						recipe={getRecipeFromList(selectedRecipe)}
						recipeList={recipeList}
						setShowEditor={setShowEditor}
						setRecipeList={setRecipeList}
						setSelectedRecipe={setSelectedRecipe}
					></RecipeEditor>
				)}
				{showAdder && (
					<RecipeAdder
						setSelectedRecipe={setSelectedRecipe}
						recipeList={recipeList}
						setShowAdder={setShowAdder}
						setRecipeList={setRecipeList}
					></RecipeAdder>
				)}
				<main className="main-container">
					<RecipeIndex
						setRecipeList={setRecipeList}
						recipeList={recipeList}
						setSelectedRecipe={setSelectedRecipe}
					></RecipeIndex>
					<RecipeWindow
						showAdder={showAdder}
						setShowAdder={setShowAdder}
						showEditor={showEditor}
						setShowEditor={setShowEditor}
						setRecipeList={setRecipeList}
						setSelectedRecipe={setSelectedRecipe}
						recipeList={recipeList}
						selectedRecipe={selectedRecipe}
						recipe={getRecipeFromList(selectedRecipe)}
					></RecipeWindow>
				</main>
			</div>
			<footer className="footer-container">
				<h3>Made by Valdrin</h3>
			</footer>
		</>
	);
}

export default App;

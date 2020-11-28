import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import RandomArticle from "./components/RandomArticle";
import Searchbar from "./components/Searchbar";

function App() {
	return (
		<>
		<div className="wrapper">
			<header className="header">
				<h1>Wikipedia Viewer</h1>
			</header>
			<RandomArticle></RandomArticle>
			</div>
			<Searchbar></Searchbar>
			<div className="wrapper">
			<p>Click Icon to search</p>
			</div>
			</>
	);
}

export default App;

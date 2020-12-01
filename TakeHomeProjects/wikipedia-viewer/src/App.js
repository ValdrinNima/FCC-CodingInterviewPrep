import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import RandomArticle from "./components/RandomArticle";
import Searchbar from "./components/Searchbar";

function App() {
	return (
		<div className="wrapper">
			<header className="header">
				<h1>Wikipedia Viewer</h1>
			</header>
			<RandomArticle></RandomArticle>
			<Searchbar></Searchbar>
			<div className="info-text">
				<p>Click Icon to search</p>
			</div>
		</div>
	);
}

export default App;

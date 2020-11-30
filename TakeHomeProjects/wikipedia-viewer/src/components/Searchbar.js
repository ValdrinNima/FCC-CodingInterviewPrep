import React, { useState, useEffect } from "react";
import Article from "./Article";

const Searchbar = () => {
	const [input, setInput] = useState("");
	const [articleList, setArticleList] = useState("");
	const [searchActive, setSearchInactive] = useState(false);

	const fetchRandomArticles = (e) => {
		e.preventDefault();
		const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&origin=*&gsrsearch=`;
		const search = input;

		fetch(url + search)
			.then((res) => res.json())
			.catch((err) => console.log(err))
			.then((data) => {
				setArticleList(data.query.pages);
			})
			.catch((err) => console.log(err));

		setInput("");
	};

	const updateInput = (e) => {
		setInput(e.target.value);
	};

	const activateSearch = () => {
		setSearchInactive(!searchActive);
	};

	return (
		<>
			<div className="search-container">
				<form className="search-form" onSubmit={fetchRandomArticles}>
					<input
						onClick={activateSearch}
						className={
							"search" + (searchActive ? "-active" : "")
						}
						onChange={updateInput}
						type="text"
						value={(searchActive ? input : "")}
					></input>
					<div className={"glass-handle" + (searchActive ? "-active" : "")}></div>
				</form>
			</div>
			<div className="article-list">
				{Object.keys(articleList).map((article) => {
					return (
						<Article
							extract={articleList[article].extract}
							title={articleList[article].title}
						></Article>
					);
				})}
			</div>
		</>
	);
};

export default Searchbar;

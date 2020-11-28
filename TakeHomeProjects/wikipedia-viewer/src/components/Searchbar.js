import React, { useState, useEffect } from "react";
import Article from "./Article";

const Searchbar = () => {
	const [input, setInput] = useState("");
	const [articleList, setArticleList] = useState("");

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

	return (
		<div className="search-container">
			<form onSubmit={fetchRandomArticles}>
				<div className="search-icon-off">
					<input
						onChange={updateInput}
						type="text"
						value={input}
					></input>
				</div>
			</form>
			<div className="articles-list">
				{Object.keys(articleList).map((article) => {
					return (
						<Article
							extract={articleList[article].extract}
							title={articleList[article].title}
						></Article>
					);
				})}
			</div>
		</div>
	);
};

export default Searchbar;

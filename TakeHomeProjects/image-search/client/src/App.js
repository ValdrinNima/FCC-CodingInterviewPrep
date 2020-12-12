import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [searchTerm, setSearchTerm] = useState("");
	const [offset, setOffset] = useState(0);
	const [imageArray, setImageArray] = useState();
	const [pastSearchTerms, setPastSearchTerms] = useState();

	const showPastSearchHistory = () => {
		fetch("/api/latest/imagesearch")
			.then((res) => res.json())
			.then((data) => {
				setPastSearchTerms(data.slice(0, 10));
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const fetchSearchResult = (e) => {
		e.preventDefault();
		let url;
		if (!offset) {
			url = `/api/imagesearch/${searchTerm}`;
		} else {
			url = `/api/imagesearch/${searchTerm}?offset=${offset - 1}`;
		}
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setImageArray(data.imageArray);
			})
			.catch((err) => {
				console.log(err);
			});
		setSearchTerm("");
	};

	return (
		<div className="wrapper">
			<header>Image Search</header>
			<div class="container">
				<p>Enter your search term here!</p>
				<form onSubmit={fetchSearchResult}>
					<input
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						type="text"
					></input>
					<p>Change the pagination</p>
					<input
						type="number"
						min="1"
						max="99"
						placeholder="1"
						onChange={(e) => setOffset(e.target.value)}
					></input>
					<button type="submit">Submit</button>
				</form>
			</div>
			<h2>Result</h2>
			<div className="result-container">
				{imageArray &&
					imageArray.map((image, ind) => {
						return (
							<img
								key={ind}
								src={image.imageURL}
								alt={image.altText}
							></img>
						);
					})}
			</div>
			<h2>Search History</h2>
			<div className="container">
				<p>Click here to show your search history</p>
				<button onClick={showPastSearchHistory}>Show History</button>
				<div>
					<ul>
						{pastSearchTerms &&
							pastSearchTerms.map((item, ind) => {
								return (
									<li key={ind}>
										<b>Term:</b> {item.searchTerm}
										<br></br>
										<b> Date: </b>
										{item.when}
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;

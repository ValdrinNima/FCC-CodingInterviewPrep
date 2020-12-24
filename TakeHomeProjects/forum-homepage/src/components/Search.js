import React from "react";

function Search({ displaySearch, setSearchTerm, searchTerm }) {
	const [input, setInput] = React.useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		setSearchTerm(input);
	};

	return (
		<div
			className={
				displaySearch
					? "search-container show-search"
					: "search-container"
			}
		>
			<form onSubmit={onSubmit} className="search-form">
				<input
					onChange={(e) => {
						setInput(e.target.value.toLowerCase());
					}}
					className="search-field"
					type="text"
				></input>
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
		</div>
	);
}

export default Search;

import React from "react";

function Search({ displaySearch }) {
	const [searchTerm, setSearchTerm] = React.useState("");

	return (
		<div
			className={
				displaySearch
					? "search-container show-search"
					: "search-container"
			}
		>
			<form onSubmit={() => console.log("ehlo")} className="search-form">
				<input
					onChange={(e) => {
						setSearchTerm(e.target.value);
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

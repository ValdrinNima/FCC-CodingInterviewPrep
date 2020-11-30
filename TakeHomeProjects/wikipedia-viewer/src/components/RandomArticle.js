import React, { useState, useEffect } from "react";

const RandomArticle = () => {
	const openRandomArticle = () => {
		const url = "https://en.wikipedia.org/wiki/Special:Random";
		window.open(url);
	};

	return (
		<div>
			<p onClick={openRandomArticle} className="random-article-link">
				<span>Click here for a random article</span>
			</p>
		</div>
	);
};

export default RandomArticle;

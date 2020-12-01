import React, { useState, useEffect } from "react";

const Article = ({ title, extract }) => {
	return (
		<div className="article">
			<h3 className="article-title">{title}</h3>
			<p>{extract}</p>
		</div>
	);
};

export default Article;

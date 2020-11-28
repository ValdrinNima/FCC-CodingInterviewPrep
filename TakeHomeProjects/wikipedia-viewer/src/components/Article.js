import React, { useState, useEffect } from "react";

const Article = ({ title, extract }) => {
	return (
		<div>
			<p>{title}</p>
			<p>{extract}</p>
		</div>
	);
};

export default Article;

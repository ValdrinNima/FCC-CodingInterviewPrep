import React, { useState, useEffect } from "react";
import fetchLatestPosts from "./api/PostsAPI";
import Post from "./components/Post";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetchLatestPosts().then((data) => {
			setPosts(data);
		});
	}, []);

	return (
		<div>
			<nav className="navbar">
				<img
					className="navbar__logo"
					src="https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/c/4c06248fcb7353707abcde9f10fc43a5fb6748db.svg"
					alt="The freeCodeCamp Forum"
				></img>
				<ul className="navigation">
					<li className="navbar__search-icon">Search</li>
					<li className="navbar__menu-icon">Menu</li>
				</ul>
			</nav>
			<main className="wrapper">
				<div className="posts-container">
					<div className="post-container__header">
						<ul className="header">
							<li className="header__rank">#</li>
							<li className="header__topic">Topic</li>
							<li className="header__posters"></li>
							<li className="header__replies">Replies</li>
							<li className="header__views">Views</li>
							<li className="header__activity">Activity</li>
						</ul>
					</div>
					<div>
						{posts.map((post, index) => (
							<Post
								rank={index}
								key={post.id}
								id={post.id}
								title={post.title}
								replies={post.replies}
								views={post.views}
								activity={post.activity}
								posters={post.posters}
							></Post>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;

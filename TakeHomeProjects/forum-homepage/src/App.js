import React, { useState, useEffect } from "react";
import fetchLatestPosts from "./api/api";
import Post from "./components/Post";
import "./App.css";

function App() {
	const [posts, setPosts] = useState([]);

	const calculateActivity = () => {
		let createDate = new Date(created_at);
		let lastPostedDate = new Date(last_posted_at);
		const diffTime = Math.abs(lastPostedDate - createDate);
		const diffMinutes = Math.ceil(diffTime / (1000 * 60 * 60));
		return diffMinutes;
	};

	

	useEffect(() => {
		fetchLatestPosts().then((data) => {
			setPosts(data.topic_list.topics);
		});
	}, []);

	return (
		<div>
			<navbar className="navbar">
				<img
					className="navbar__logo"
					src="https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/c/4c06248fcb7353707abcde9f10fc43a5fb6748db.svg"
					alt="The freeCodeCamp Forum"
				></img>
				<ul className="navigation">
					<li className="navbar__search-icon">Search</li>
					<li className="navbar__menu-icon">Menu</li>
				</ul>
			</navbar>
			<main className="wrapper">
				<div className="posts-container">
					<div className="post-container__header">
						<ul className="header">
							<li className="header__rank">#</li>
							<li className="header__topic">Topic</li>
							<li className="header__replies">Replies</li>
							<li className="header__views">Views</li>
							<li className="header__activity">Activity</li>
						</ul>
					</div>
					<div>
						{posts.map((post) => (
							<Post
								key={post.id}
								title={post.title}
								replies={post.reply_count}
								views={post.views}
								created_at={post.created_at}
								last_posted_at={post.last_posted_at}
							></Post>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;

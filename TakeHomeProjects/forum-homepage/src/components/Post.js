import React, { useState } from "react";

function Post({ rank, id, slug, title, replies, posters, views, activity }) {
	const formatTime = (minutes) => {
		console.log(minutes);
		if (Math.floor(minutes / 60) > 0) {
			return "1h";
		} else if (Math.floor(minutes / 60) > 1) {
			return "2h";
		} else {
			return minutes + "m";
		}
	};

	return (
		<div className="post">
			<ul className="post-list">
				<li>{rank}</li>
				<li>
					<a href={`https://forum.freecodecamp.org/t/${slug}/${id}`}>
						{title}
					</a>
				</li>
				<li>{replies}</li>
				<li>
					{posters.map((poster) => {
						const size = 30;
						let avatarURL = `https://sjc1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/${poster.username}/${size}/149850_2.png`;
						return (
							<a href={avatarURL}>
								<img
									key={poster.id}
									alt="user avatar"
									src={avatarURL}
								></img>
							</a>
						);
					})}
				</li>
				<li>{views}</li>
				<li>{formatTime(activity)}</li>
			</ul>
		</div>
	);
}

export default Post;

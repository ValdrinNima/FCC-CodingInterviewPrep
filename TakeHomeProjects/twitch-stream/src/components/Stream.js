import React, { useState, useEffect } from "react";

const Stream = ({ name, profileImage, description }) => {
	return (
		<div className="stream-container">
			<img src={profileImage}></img>
			<div className="flex">
				<p className="stream-title">{name}</p>
                <p className="steam-description">{description}</p>
				<a href={"https://www.twitch.tv/" + name}>
					Click here to watch the stream!
				</a>
			</div>
		</div>
	);
};

export default Stream;

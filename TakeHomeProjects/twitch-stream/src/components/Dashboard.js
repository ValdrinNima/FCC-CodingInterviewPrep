import React, { useState, useEffect } from "react";
import Stream from "./Stream";
import fetchStream from "../utils/api";
// https://twitch-proxy.freecodecamp.rocks/helix/users?login=freecodecamp
// https://www.twitch.tv/

const Dashboard = () => {
	const [streamerNames, setstreamerNames] = useState([
		"ESL_SC2",
		"OgamingSC2",
		"cretetion",
		"freecodecamp",
		"storbeck",
		"habathcx",
		"RobotCaleb",
		"noobs2ninjas",
	]);
	const [streamerObjectList, setStreamerObjectList] = useState([]);

	useEffect(() => {
		fetchStream(streamerNames, setStreamerObjectList);
	}, []);

	return (
		<div className="container">
			<ul>
				{streamerObjectList.map((streamer, ind) => {
					return (
						<Stream
							key={ind}
							name={streamer.name}
							profileImage={streamer.profile_image}
							description={streamer.description}
						></Stream>
					);
				})}
			</ul>
		</div>
	);
};

export default Dashboard;

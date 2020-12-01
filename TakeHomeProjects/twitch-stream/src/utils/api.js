const getStream = (name) => {
	return fetch(
		"https://twitch-proxy.freecodecamp.rocks/helix/users?login=" + name
	).then((res) => res.json());
};

const fetchStream = async (streamerNames, setStreamerObjectList) => {
	let streamerPromises = [];
	streamerNames.forEach((streamer) => {
		streamerPromises.push(getStream(streamer));
	});

	await Promise.all(streamerPromises).then((data) => {
		let streamersList = [];
		data.forEach((streamer) => {
			streamersList.push({
				name: streamer.data[0].login,
				profile_image: streamer.data[0].profile_image_url,
				description: streamer.data[0].description
			});
		});
		console.log(streamersList);
		setStreamerObjectList(streamersList);
	});
};

export default fetchStream;

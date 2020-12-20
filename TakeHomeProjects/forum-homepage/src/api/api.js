async function fetchLatestPosts() {
	const url = " https://forum-proxy.freecodecamp.rocks/latest";

	let res = await fetch(url);
	let json = await res.json();

	return json;
}

export default fetchLatestPosts;

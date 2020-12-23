async function fetchLatestPosts() {
	const url = "https://forum-proxy.freecodecamp.rocks/latest";

	let res = await fetch(url);
	let json = await res.json();

	let tempPosts = json.topic_list.topics;
	let users = json.users;
	let posts = [];
	json.topic_list.topics.forEach((post) => {
		let activity = calculateActivity(post.created_at, post.last_posted_at);
		posts.push({
			slug: post.slug,
			id: post.id,
			title: post.title,
			replies: post.reply_count,
			views: post.views,
			activity,
			posters: [],
		});
	});

	for (let i = 0; i < users.length; i++) {
		for (let j = 0; j < tempPosts.length; j++) {
			for (let k = 0; k < tempPosts[j].posters.length; k++) {
				if (tempPosts[j].posters[k].user_id === users[i].id) {
					posts[j].posters.push(users[i]);
				}
			}
		}
	}

	posts.sort((a, b) => a.activity - b.activity);
	return posts;
}

export default fetchLatestPosts;

const calculateActivity = (created_at, last_posted_at) => {
	let createDate = new Date();
	let lastPostedDate = new Date(last_posted_at);
	const diffTime = Math.abs(lastPostedDate - createDate);
	const diffMinutes = Math.ceil(diffTime / (1000 * 60));
	return diffMinutes;
};

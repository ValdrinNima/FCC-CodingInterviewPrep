module.exports = function (app, axios, Search) {
	app.use("/api/imagesearch/:search", (req, res, next) => {
		const { search } = req.params;
		console.log(search);
		const data = new Search({
			searchTerm: search,
			when: Date.now(),
		});

		console.log(data);
		data.save((err, data) => {
			if (err) return console.error(err);
			console.log(data);
			console.log("search has been added");
		});
		next();
	});

	app.get("/api/imagesearch/:search", (req, res) => {
		const { search } = req.params;
		let { offset: start } = req.query;
		start = start || 0;

		// make api call
		axios
			.get(
				`https://www.googleapis.com/customsearch/v1?key=${
					process.env.API_KEY
				}&cx=${process.env.SEARCH_ENGINE}&q=${search}&num=10&start=${
					10 * start + 1
				}&searchType=image`
			)
			.then((response) => {
				let imageArray = [];
				response.data.items.forEach((item) => {
					imageArray.push({
						pageURL: item.image.contextLink,
						altText: item.title,
						imageURL: item.image.thumbnailLink,
					});
				});

				let searchInfo = response.data.searchInformation;
				let result = {
					searchInfo,
					imageArray,
				};
				res.json(result);
			})
			.catch((err) => {
				res.json(err);
			});
	});

	app.get("/api/latest/imagesearch", (req, res) => {
		Search.find({})
			.sort({ when: -1 })
			.exec((err, data) => {
				if (err) return console.error(err);
				res.json(data);
			});
	});
};

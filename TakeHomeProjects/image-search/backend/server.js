const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const routes = require("./routes.js");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const searchSchema = new mongoose.Schema({
	searchTerm: String,
	when: Date,
});

const Search = mongoose.model("searchHistory", searchSchema);
routes(app, axios, Search);

app.listen(process.env.PORT || 3001, () => {
	console.log("listening on port" + process.env.PORT);
});

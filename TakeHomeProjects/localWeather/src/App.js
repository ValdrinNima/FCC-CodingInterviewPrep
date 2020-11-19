import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [weather, setWeather] = useState({});

	const fetch_weather = async () => {
		let longitude = 35;
		let latitude = 139;

		// fetch weather JSON
		let query = `api/current?lon=${longitude}&lat=${latitude}`;
		let weather_res = await fetch(
			"https://weather-proxy.freecodecamp.rocks/" + query
		);
		let weather_json = await weather_res.json();
		console.log(weather_json);

		// set state with weather JSON
		setWeather((state) => { ...state, location: weather_json.name });
		setWeather({ ...weather, temperature: weather_json.main.temp });
		setWeather({
			...weather,
			description: weather_json.weather[0].description,
		});

		// fetch weather icon
		// switch (weather.description)
		// let icon_res = await fetch(
		// 	`http://openweathermap.org/img/wn/${weather.location}@2x.png`
		// );
	};

	useEffect(() => {
		fetch_weather();
	}, []);

	return (
		<div>
			<header className="header">
				<h1>Local Weather</h1>
			</header>
			<div className="container">
				<div className="location">{weather.location}</div>
				<div className="temperature">{weather.temperature}</div>
				<div>{weather.description}</div>
				<div className="weather-icon">
					<img src=""></img>
				</div>
			</div>
		</div>
	);
}

export default App;

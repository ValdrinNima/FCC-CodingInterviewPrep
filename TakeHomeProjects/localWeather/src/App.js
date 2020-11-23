import React, { useState, useEffect } from "react";
// import "./App.css";

function App() {
	const [weather, setWeather] = useState({});
	const [temp, setTemp] = useState({ celsius: true });

	const fetch_weather = async () => {
		let longitude, latitude;

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				latitude = position.coords.latitude;
				longitude = position.coords.longitude;

				setWeather((prevState) => {
					return {
						...prevState,
						longitude: longitude,
						latitude: latitude,
					};
				});
			});
		} else {
			alert("Could not retrieve geolocation");
		}
		// fetch weather JSON
		let lon = weather.longitude;
		console.log(weather.latitude);
		let lat = weather.latitude;
		if (!lon || !lat) {
			lon = 35;
			lat = 139;
		}
		let query = `api/current?lon=${lon}&lat=${lat}`;
		let weather_res = await fetch(
			"https://weather-proxy.freecodecamp.rocks/" + query
		);
		let weather_json = await weather_res.json();

		console.log(weather);
		// set state with weather JSON
		setWeather((prevState) => {
			return {
				...prevState,
				location: weather_json.name,
				temperature: weather_json.main.temp,
				description: weather_json.weather[0].description,
			};
		});

		let queryIcon;
		switch (weather.description) {
			case "broken clouds": {
				queryIcon = "04d";
				break;
			}
			case "clear sky": {
				queryIcon = "01d";
				break;
			}
			case "few clouds": {
				queryIcon = "02d";
				break;
			}
			case "scattered clouds": {
				queryIcon = "03d";
				break;
			}
			case "shower rain": {
				queryIcon = "09d";
				break;
			}
			case "rain": {
				queryIcon = "10d";
				break;
			}
			default: {
				queryIcon = "04d";
			}
		}
		let icon_res = await fetch(
			`http://openweathermap.org/img/wn/${queryIcon}@2x.png`
		);
		setWeather((prevState) => {
			return { ...prevState, iconURL: icon_res.url };
		});
	};

	const toFahrenheit = (temp) => {
		let result = temp * 1.8 + 32;
		return result.toFixed(2);
	};

	useEffect(() => {
		fetch_weather();
	}, []);

	return (
		<div className="main">
			<header className="header">
				<h1>Local Weather</h1>
			</header>
			<div className="container">
				<div className="location">{weather.location}</div>
				<div className="temperature">
					{temp.celsius
						? weather.temperature
						: toFahrenheit(weather.temperature)}{" "}
					{temp.celsius ? "°C" : "°F"}
				</div>
				<div>{weather.description}</div>
				<div className="weather-icon">
					<img className="icon" src={weather.iconURL}></img>
				</div>
				<button className="temp-button" onClick={() => setTemp({ celsius: !temp.celsius })}>
					{temp.celsius ? "to Fahrenheit" : "to Celsius"}
				</button>
			</div>
		</div>
	);
}

export default App;

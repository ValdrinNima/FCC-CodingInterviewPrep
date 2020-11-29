import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<div className="wrapper">
			<header>Twitch Streamer</header>
			<Dashboard></Dashboard>
		</div>
	);
}

export default App;

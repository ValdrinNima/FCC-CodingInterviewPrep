import React from "react";

const Menu = (props) => {
	const [darkMode, setDarkMode] = React.useState(true);

	const changeToLight = () => {
		let root = document.documentElement;

		if (darkMode) {
			// light mode
			root.style.setProperty("--navbar-color", "#0a0a23");
			root.style.setProperty("--main-color", "white");
			root.style.setProperty("--font-color-post", "black");
			root.style.setProperty("--font-color-header", "#616271");
			setDarkMode(!darkMode);
		}
	};

	const changeToDark = () => {
		let root = document.documentElement;
		if (!darkMode) {
			// dark mode
			root.style.setProperty("--navbar-color", "#0a0a23");
			root.style.setProperty("--main-color", "#313146");
			root.style.setProperty("--font-color-post", "#d6d7da");
			root.style.setProperty("--font-color-header", "#616271");
			setDarkMode(!darkMode);
		}
	};
	return (
		<div
			className={
				props.displayMenu
					? "menu-container show-menu"
					: "menu-container"
			}
		>
			<ul className="menu-list">
				<li className="menu-item">
					<a href="/">Home</a>
				</li>
				<li className="menu-item">
					<a href="/about">About</a>
				</li>
				<li className="menu-item">
					<a href="/services">Services</a>
				</li>
				<li className="menu-item">
					<a href="/contact">Contact us</a>
				</li>
			</ul>

			<ul className="menu-list column">
				<li
					className="menu-button"
					onClick={() => {
						changeToDark();
					}}
				>
					Dark Mode
				</li>
				<li
					className="menu-button"
					onClick={() => {
						changeToLight();
					}}
				>
					Light Mode
				</li>
			</ul>
		</div>
	);
};

export default Menu;

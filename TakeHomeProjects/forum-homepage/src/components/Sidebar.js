import React from "react";

const Menu = (props) => {
	return (
		<div>
			<a className="menu-item" href="/">
				Home
			</a>

			<a className="menu-item" href="/about">
				About
			</a>

			<a className="menu-item" href="/services">
				Services
			</a>

			<a className="menu-item" href="/contact">
				Contact us
			</a>
		</div>
	);
};

export default Menu;

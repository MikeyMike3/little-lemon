import React from "react";
import logo from "../imgs/Asset 16@4x.png";

export const Header = () => {
	return (
		<header>
			<div className="wrapper">
				<div className="header-container">
					<div className="img-container">
						<img src={logo} alt="logo" />
					</div>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Menu</li>
						<li>Reservations</li>
						<li>Order Online</li>
						<li>Login</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

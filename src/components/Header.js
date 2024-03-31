import React, { useState } from "react";
import logo from "../imgs/Asset 16@4x.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen((open) => !open);
	};
	return (
		<header>
			<nav>
				<div className="wrapper">
					<div className="header-container">
						<img src={logo} alt="logo" />
						<FontAwesomeIcon
							icon={faBars}
							className="menu"
							onClick={toggleMenu}
						/>
						<ul className={`${isOpen ? "is-open" : ""}`}>
							<li>Home</li>
							<li>About</li>
							<li>Menu</li>
							<li>Reservations</li>
							<li>Order Online</li>
							<li>Login</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

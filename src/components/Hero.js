import React from "react";
import bread from "../imgs/bread.PNG";

export const Hero = () => {
	return (
		<div className="hero-container">
			<div className="wrapper">
				<div className="hero-flex">
					<div>
						<h3>Little Lemon</h3>
						<h4>Chicago</h4>
						<p>
							We are a family owned Mediterranean restaurant,
							focused on traditional recipes served with a modern
							twist.
						</p>
						<button className="reserve-button">
							Reserve a Table
						</button>
					</div>

					<img src={bread} alt="bread" />
				</div>
			</div>
		</div>
	);
};

import React from "react";

export const Card = (props) => {
	return (
		<div className="card">
			<img src={props.imgSrc} alt="Food"></img>
			<div className="card-wrapper">
				<div className="title-price-flex">
					<h2>{props.title}</h2>
					<p className="price">{props.price}</p>
				</div>
				<p>{props.description}</p>
				<button className="delivery">Order a delivery</button>
			</div>
		</div>
	);
};

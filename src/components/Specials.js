import React from "react";
import { Card } from "./Card";

export const Specials = () => {
	return (
		<div className="wrapper">
			<div className="specials-flex">
				<h3>This weeks specials!</h3>
				<button>Online Menu</button>
			</div>
			<div className="specials-card-grid">
				<Card
					imgSrc=""
					title="Greek Salad"
					price="$12.99"
					description="The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
				/>
				<Card
					imgSrc=""
					title="Bruschetta"
					price="$6.99"
					description="Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
				/>
				<Card
					imgSrc=""
					title="lemon Dessert"
					price="$5.00"
					description="This comes straight from the grandma's recipe book, every last ingredient has been sourced and is an authentic as can be imagined."
				/>
			</div>
		</div>
	);
};

import React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Specials } from "./Specials";
import { BookingForm } from "./BookingForm";
import { Footer } from "./Footer";

export const Main = () => {
	return (
		<body>
			<Header />
			<main>
				<Hero />
				<Specials />
				<BookingForm />
			</main>
			<Footer />
		</body>
	);
};

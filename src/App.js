import "./App.css";
import { BookingForm } from "./components/BookingForm";
import { BookingFormProvider } from "./components/BookingFormContext";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Specials } from "./components/Specials";

function App() {
	return (
		<BookingFormProvider>
			<div className="App">
				<body>
					<Header />
					<main>
						<Hero />
						<Specials />
						<BookingForm />
					</main>
					<Footer />
				</body>
			</div>
		</BookingFormProvider>
	);
}

export default App;

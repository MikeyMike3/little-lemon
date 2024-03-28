import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Specials } from "./components/Specials";

function App() {
	return (
		<div className="App">
			<body>
				<Header />
				<main>
					<Hero />
					<Specials />
				</main>
				<Footer />
			</body>
		</div>
	);
}

export default App;

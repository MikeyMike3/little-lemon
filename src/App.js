import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Specials } from "./components/Specials";

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Hero />
				<Specials />
			</main>
		</div>
	);
}

export default App;

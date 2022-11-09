import "./App.css";
import Carousel from "./Components/Carousel/Carousel";
import Footer from "./Components/Footer/FooterComponent/Footer";
import Header from "./Pages/Header";
import Suggestions from "./Pages/Suggestions";
import Deals from "./Pages/Deals";
import Locals from "./Pages/Locals";
import Accessories from "./Pages/Accessories";

function App() {
	return (
		<div className="app-bg">
			<Header />
			<Carousel />
			<Suggestions />
			<Deals />
			<Locals />
			<Accessories />
			<Footer />
		</div>
	);
}

export default App;

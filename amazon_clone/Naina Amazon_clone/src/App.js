import "./App.css";
import Deals from "./Components/DealsCards/Deals";
import FeedSlider from "./Components/FeedSlider/FeedSlider";
import Footer from "./Components/Footer/Footer";
import ImgBanner from "./Components/ImgBanner/ImgBanner";
import Navbar from "./Components/Navbar/Navbar";
import QuadCard from "./Components/QuadCards/QuadCard";

function App() {
    return (
        <div className="App">
            <Navbar />
            <ImgBanner />
            <section className="quad-cards-section common">
                <QuadCard title="Shop & Pay | Earn daily rewards" />
                <QuadCard title="Redefine your living room" />
                <QuadCard title="Revamp your home in style" />
                <QuadCard title="Shop by category" />
                <QuadCard title="Top picks for your home" />
                <QuadCard title="Shop by category" />
                <QuadCard title="Top rated premium quality | Amazon Brands" />
                <QuadCard title="Car and bike essentials upto 60% off" />
                <QuadCard
                    hidden={true}
                    title="Upto 60% off on women's styles"
                />
            </section>
            <section className="deals-section common">
                <h3>Today's Deals</h3>
                <Deals />
            </section>
            <section className="deals-section common">
                <h3>Refresh your home ambiance | Local shops collection</h3>
                <FeedSlider />
            </section>
            <section className="deals-section common">
                <h3>
                    Up to 60% off | Glassware & dinnerware sets from local shops
                </h3>
                <FeedSlider />
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;

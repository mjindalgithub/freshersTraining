
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import BottomNav from './Components/Navbar/BottomNav';
import Carousel from './Components/Carousel/Carousel';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BottomNav />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;

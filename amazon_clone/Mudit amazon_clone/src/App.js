
import './App.css';
import Card from './Components/CardComponent/Card';
import Footer from './Components/FooterComponent/Footer';
import Navbar from './Components/NavbarComponent/Navbar';
import Navbar2 from './Components/NavbarComponent/Navbar2';

function App() {
  return (
    <div >
    <Navbar />
    <Navbar2 />
    <div className='cards'>
    <Card text={"upto 60% off | Styles for Women"} text2={"womens clothing"}/>
    <Card text={"Top picks for your home & more"} text2={"Air Conditioners"}/>
    <Card text={"Revamp your home in style & more"} text2={"Bedsheet curtains and More"}/>
    <Card text={"Exclusive offers on travel tickets"} text2={"Get 200 off"} className="hidden"/>
    <Card text={"Shop by Category and grab the best"} text2={"Fresh,Mobiles ,Fashion"}/>
    <Card text={"Shop & Pay | Earn rewards daily"} text2={"Claim your scratch cards"}/>
    <Card text={"Up to 60% off | Styles for Men"} text2={"Clothing footwear"}/>
    <Card text={"Sell on Amazon with 50% off on Selling Fee"} text2={"Register now"}/>
    <Card text={"Daily essentials | Amazon Brands & more"} text2={"Upto 40%off on grocery"}/>
    <Card text={"Keep shopping for your fav items"} text2={"Dell Laptops"}/>
    <Card text={"Cookware & dining for your daily need"} text2={"Gas stoves"}/>
    <Card text={"Electronics devices for home office"} text2={"Smartwatches and smart trackers"}/>
    <Card text={"Birthday store for your loved ones"} text2={"Gifts for men,women ,children,pet"}/>
    <Card text={"miniTV Exclusive | Udan Patolas Season-2"} text2={"Watch udan Patolas"}/>
    <Card text={"Everything for the newborn & expecting mothers"} text2={"Baby Wishlist"}/>
    <Card text={"Up to 60% off | Professional tools & more"} text2={"See more"} hidden={true}/>
    </div>
    <hr/>
    <Footer />

    </div>
  );
}

export default App;

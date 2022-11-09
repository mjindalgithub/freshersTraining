import "./NavbarMain.css";
import React from "react";

const NavbarMain = () => {
	return (
		<section id="nav-main">
			<div className="left-nav">
				<ul className="nav-links">
					<li className="nav-all">All</li>
					<li className="nav-sell">Sell</li>
					<li className="nav-best-sellers">Best Sellers</li>
					<li className="nav-deals">Today's Deals</li>
					<li className="nav-mobiles">Mobiles</li>
					<li className="nav-cust-service">Customer Service</li>
					<li className="nav-elec">Electronics</li>
					<li className="nav-home">Home & Kitchen</li>
					<li className="nav-fashion">Fashion</li>
					<li className="nav-books">Books</li>
					<li className="nav-prime">Prime</li>
					<li className="nav-new-releases">New Releases</li>
				</ul>
			</div>
			<div className="right-nav">This is the right navbar</div>
		</section>
	);
};

export default NavbarMain;

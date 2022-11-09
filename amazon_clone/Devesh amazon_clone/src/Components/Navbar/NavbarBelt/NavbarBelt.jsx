import React from "react";
import "./NavbarBelt.css";

const NavbarBelt = () => {
	return (
		<section className="navbar-belt">
			<div id="nav-brand">
				<h2>amazon.in</h2>
			</div>
			<div className="nav-location">
				<p className="nav-top-text">Hello</p>
				<h4 className="nav-bottom-text">Select your address</h4>
			</div>
			<div className="nav-search-div">
				<div id="search-categories">All</div>
				<input type="text" name="Seach" id="nav-search-inp" />
				<div id="search-icon">Icon</div>
			</div>
			<div id="nav-country">India</div>
			<div className="nav-signin">
				<p className="nav-top-text">Hello, sign in</p>
				<h4 className="nav-bottom-text">Accounts & lists</h4>
			</div>
			<div className="nav-returns">
				<p className="nav-top-text">Returns</p>
				<h4 className="nav-bottom-text">& Orders</h4>
			</div>
			<div className="nav-cart">
				<div className="cart-icon">Icon</div>
				<h4>Cart</h4>
			</div>
		</section>
	);
};

export default NavbarBelt;

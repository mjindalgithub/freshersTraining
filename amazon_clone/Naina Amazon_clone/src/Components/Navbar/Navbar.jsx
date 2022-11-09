import React from "react";
import BottomNav from "./BottomNav";
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <div className="navbar-outer-div">
                <div id="navbar-brand">
                    <p>
                        amazon<span>.in</span>
                    </p>
                    <img
                        src="https://massolutions.biz/wp-content/uploads/2017/01/Amazoncom-yellow-arrow.png"
                        alt=""
                    />
                </div>
                <div className="navbar-location">
                    <p className="greet">Hello</p>
                    <p className="bottom-heading">Select your address</p>
                </div>
                <div className="search-bar">
                    <div className="category">All</div>
                    <input type="text" />
                    <div className="icon">search</div>
                </div>
                <div className="india">India</div>
                <div className="nav-right-options">
                    <p className="greet">Hello, sign in</p>
                    <p className="bottom-heading">Account & Lists</p>
                </div>
                <div className="nav-right-options">
                    <p className="greet">Returns</p>
                    <p className="bottom-heading">& Orders</p>
                </div>
                <div className="nav-right-options">
                    <p className="bottom-heading">Cart</p>
                </div>
            </div>
            <BottomNav />
        </>
    );
};

export default Navbar;

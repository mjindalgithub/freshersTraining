import React from "react";
// import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";

const Navbar = () => {
    return (
        <section className="navbar-section">
            <div className="left heading">
                <h2>amazon.in</h2>
                <div className="item">
                    <p>Hello</p>
                    <h5>Select your address</h5>
                </div>
            </div>
            <div className="searchBox heading">
                <div className="box">
                    <div className="heading">
                        <button className="all" type="button">
                            All
                        </button>
                        <input type="text" />
                        <button className="search" type="submit"></button>
                        {/* <SearchIcon /> */}
                    </div>
                </div>
            </div>
            <div className="right heading">
                <div className="item">
                    <p>English</p>
                    <h5>India</h5>
                </div>
                <div className="item">
                    <p>Returns</p>
                    <h5>& Order</h5>
                </div>
                <div className="item">
                    <p>Hello,sign in</p>
                    <h5>Account & Lists</h5>
                </div>
                <div className="item">
                    <p className="cart">Cart</p>
                </div>
            </div>
        </section>
    );
};

export default Navbar;

import React from "react";
import "./BottomNav.css";

const BottomNav = () => {
    return (
        <section id="bottom-nav-div">
            <div className="bottom-left-nav">
                <a href="#all">All</a>
                <a href="#BS">Best Sellers</a>
                <a href="#TD">Today's Deals</a>
                <a href="#mob">Mobiles</a>
                <a href="#CS">Customer Service</a>
                <a href="#Elec">Electronics</a>
                <a href="#HK" className="hidden-links">
                    Home & Kitchen
                </a>
                <a href="#Fashion" className="hidden-links">
                    Fashion
                </a>
                <a href="#Books" className="hidden-links">
                    Books
                </a>
            </div>
            <div className="bottom-right-nav">
                <p>This is right bottom navbar</p>
            </div>
        </section>
    );
};

export default BottomNav;

import React from "react";
import "./BottomNav.css";

const BottomNav = () => {
    return (
        <section className="bottomnav-section">
            <div className="nav-headings">
                <h5>All</h5>
                <h5>Sell</h5>
                <h5>Best Sellers</h5>
                <h5>Today's Deals</h5>
                <h5>Mobiles</h5>
                <h5>Customer Service</h5>
                <h5>Electronics</h5>
                <h5 className="hidden-links1">Home & Kitchen</h5>
                <h5 className="hidden-links">Fashion</h5>
                <h5 className="hidden-links">Books</h5>
            </div>
        </section>
    );
};

export default BottomNav;

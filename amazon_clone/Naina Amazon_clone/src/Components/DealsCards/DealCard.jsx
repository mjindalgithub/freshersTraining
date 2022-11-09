import React from "react";
import "./Deals.css";

const DealCard = ({ hidden }) => {
    return (
        <div className="deal-card">
            <div className="deal-prod-image">Product</div>
            <div className={`details ${hidden ? "hiddenDetails" : ""}`}>
                <p className="discount">
                    <span>upto 18% off</span> Deal of the Day
                </p>
                <p className="productName">Best Selling Printers</p>
            </div>
        </div>
    );
};

export default DealCard;

import React from "react";
import "./QuadCard.css";

const QuadCard = ({ hidden, title }) => {
    return (
        <section className={`quad-card-div ${hidden ? "hidden" : ""}`}>
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-images">
                <div className="img-div">
                    <div className="product-img">Image 1</div>
                    <p>Product 1</p>
                </div>
                <div className="img-div">
                    <div className="product-img">Image 2</div>
                    <p>Product 2</p>
                </div>
                <div className="img-div">
                    <div className="product-img">Image 3</div>
                    <p>Product 3</p>
                </div>
                <div className="img-div">
                    <div className="product-img">Image 4</div>
                    <p>Product 4</p>
                </div>
            </div>
            <div className="card-link">
                <a href="#seemore">See more</a>
            </div>
        </section>
    );
};

export default QuadCard;

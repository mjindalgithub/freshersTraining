import React from "react";
import "./Img4Card.css";

const Img4Card = () => {
    return (
        <section className="imgcard-section">
            <p className="card-heading">Card Heading</p>
            <div className="img-col">
                <div className="img-item">
                    <p>Img</p>
                    <h5>Description</h5>
                </div>
                <div className="img-item">
                    <p>Img</p>
                    <h5>Description</h5>
                </div>
            </div>
            <div className="img-col">
                <div className="img-item">
                    <p>Img</p>
                    <h5>Description</h5>
                </div>
                <div className="img-item">
                    <p>Img</p>
                    <h5>Description</h5>
                </div>
            </div>
            <div className="explore">
                <a href="#">See More</a>
            </div>
        </section>
    );
};

export default Img4Card;

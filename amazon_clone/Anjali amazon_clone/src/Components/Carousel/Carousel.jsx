import React from "react";
import Img4Card from "../Img4Card/Img4Card";
import OnlyImg from "../OnlyImg/OnlyImg";
import "./Carousal.css";

const Carousel = () => {
    return (
        <section className="carousel-section">
            <div className="offer">Offer images</div>
            <div className="desktop-cards">
                <Img4Card />
                <Img4Card />
                <Img4Card />
                <Img4Card />
            </div>
            <div className="desktop-cards">
                <Img4Card />
                <Img4Card />
                <Img4Card />
                <Img4Card />
            </div>
            <div>
                <OnlyImg />
                <OnlyImg />
            </div>
            <div className="desktop-cards">
                <Img4Card />
                <Img4Card />
                <Img4Card />
                <Img4Card />
            </div>
            <div className="desktop-cards">
                <Img4Card />
                <Img4Card />
                <Img4Card />
                <Img4Card />
            </div>
        </section>
    );
};

export default Carousel;

import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <section className="footer-section">
            <div className="back-to-top">
                <a href="#home">Back to Top</a>
            </div>
            <div className="footer-vertical-navlinks">
                <div className="navColumn">
                    <h3>Heading 1</h3>
                    <ul>
                        <li>
                            <a href="#about">Link 1</a>
                        </li>
                        <li>
                            <a href="#career">Link 2</a>
                        </li>
                        <li>
                            <a href="#PR">Link 3</a>
                        </li>
                        <li>
                            <a href="#AS">Link 4</a>
                        </li>
                    </ul>
                </div>
                <div className="navColumn">
                    <h3>Heading 2</h3>
                    <ul>
                        <li>
                            <a href="#fb">Link 1</a>
                        </li>
                        <li>
                            <a href="#twitter">Link 2</a>
                        </li>
                        <li>
                            <a href="#Ig">Link 3</a>
                        </li>
                    </ul>
                </div>
                <div className="navColumn">
                    <h3>Heading 3</h3>
                    <ul>
                        <li>
                            <a href="#fb">Link 1</a>
                        </li>
                        <li>
                            <a href="#twitter">Link 2</a>
                        </li>
                        <li>
                            <a href="#Ig">Link 3</a>
                        </li>
                        <li>
                            <a href="#Ig">Link 4</a>
                        </li>
                        <li>
                            <a href="#Ig">Link 5</a>
                        </li>
                    </ul>
                </div>
                <div className="navColumn">
                    <h3>Heading 4</h3>
                    <ul>
                        <li>
                            <a href="#fb">Link 1</a>
                        </li>
                        <li>
                            <a href="#twitter">Link 2</a>
                        </li>
                        <li>
                            <a href="#Ig">Link 3</a>
                        </li>
                        <li>
                            <a href="#Ig">Link 4</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footerLine">
                    <h3 className="brandName">amazon</h3>
                    <h3>Language</h3>
                </div>
                <div className="locations">
                    <ul>
                        <li>
                            <a href="#df">Australia</a>
                        </li>
                        <li>
                            <a href="#df">Brazil</a>
                        </li>
                        <li>
                            <a href="#df">Canada</a>
                        </li>
                        <li>
                            <a href="#df">China</a>
                        </li>
                        <li>
                            <a href="#df">France</a>
                        </li>
                        <li>
                            <a href="#df">Germany</a>
                        </li>
                        <li>
                            <a href="#df">Italy</a>
                        </li>
                        <li>
                            <a href="#df">Japan</a>
                        </li>
                        <li>
                            <a href="#df">Mexico</a>
                        </li>
                        <li>
                            <a href="#df">Netherlands</a>
                        </li>
                        <li>
                            <a href="#df">Poland</a>
                        </li>
                        <li>
                            <a href="#df">Singapore</a>
                        </li>
                        <li>
                            <a href="#df">Spain</a>
                        </li>
                        <li>
                            <a href="#df">Turkey</a>
                        </li>
                        <li>
                            <a href="#df">United Arab Emirates</a>
                        </li>
                        <li>
                            <a href="#df">United Kingdom</a>
                        </li>
                        <li>
                            <a href="#df">United States</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;

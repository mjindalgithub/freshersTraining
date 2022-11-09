import "./FooterMain.css";
import React from "react";

const FooterMain = () => {
	return (
		<div className="footer-main">
			<div className="footer-links-container">
				<div className="footer-links-col">
					<div className="footer-links-title">
						<h3>Get to Know Us</h3>
					</div>
					<ul className="footer-links">
						<li>Link 1</li>
						<li>Link 2</li>
						<li>Link 3</li>
						<li>Link 4</li>
					</ul>
				</div>
				<div className="footer-links-col">
					<div className="footer-links-title">
						<h3>Connect with Us</h3>
					</div>
					<ul className="footer-links">
						<li>Link 1</li>
						<li>Link 2</li>
						<li>Link 3</li>
					</ul>
				</div>
				<div className="footer-links-col">
					<div className="footer-links-title">
						<h3>Make Money with Us</h3>
					</div>
					<ul className="footer-links">
						<li>Link 1</li>
						<li>Link 2</li>
						<li>Link 3</li>
						<li>Link 4</li>
						<li>Link 5</li>
						<li>Link 6</li>
						<li>Link 7</li>
					</ul>
				</div>
				<div className="footer-links-col">
					<div className="footer-links-title">
						<h3>Let Us Help You</h3>
					</div>
					<ul className="footer-links">
						<li>Link 1</li>
						<li>Link 2</li>
						<li>Link 3</li>
						<li>Link 4</li>
						<li>Link 5</li>
						<li>Link 6</li>
						<li>Link 7</li>
					</ul>
				</div>
			</div>
			<hr className="footer-hr" />
			<div className="footer-global-div">
				<div className="brand-lang">
					<h3 className="footer-brand">amazon.in</h3>
					<p className="footer-lang">English</p>
				</div>
				<ul className="footer-countries-list">
					<li>Australia</li>
					<li>Brazil</li>
					<li>Canada</li>
					<li>China</li>
					<li>France</li>
					<li>Germany</li>
					<li>Italy</li>
					<li>Japan</li>
					<li>Mexico</li>
					<li>Netherlands</li>
					<li>Poland</li>
					<li>Singapore</li>
					<li>Spain</li>
					<li>Turkey</li>
					<li>United Arab Emirates</li>
					<li>United Kindom</li>
					<li>United States</li>
				</ul>
			</div>
		</div>
	);
};

export default FooterMain;

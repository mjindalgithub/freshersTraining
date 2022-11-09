import "./QuadCard.css";
import React from "react";

const QuadCard = (props) => {
	return (
		<div className={`quad-card${props.hidden ? " hidden" : ""}`}>
			<div className="quad-card-title">
				<h4>{props.title}</h4>
			</div>
			<div className="quad-card-body">
				<div className="quad-card-product">
					<span className="quad-card-img">image1</span>
					<span className="quad-card-details">Product1</span>
				</div>
				<div className="quad-card-product">
					<span className="quad-card-img">image2</span>
					<span className="quad-card-details">Product2</span>
				</div>
				<div className="quad-card-product">
					<span className="quad-card-img">image3</span>
					<span className="quad-card-details">Product3</span>
				</div>
				<div className="quad-card-product">
					<span className="quad-card-img">image4</span>
					<span className="quad-card-details">Product4</span>
				</div>
				<div className="card-more-link">See more</div>
			</div>
		</div>
	);
};

export default QuadCard;

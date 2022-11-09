import "./ProductCard.css";
import React from "react";

const ProductCard = ({ hideOffer }) => {
	return (
		<div className="deals-prod">
			<div className="deals-prod-img">Product</div>
			<div className={`deals-prod-offer${hideOffer ? " hideOffer" : ""}`}>
				<span className="deal-offer-span">Up to 15% off</span> Deal of
				the Day
			</div>
		</div>
	);
};

export default ProductCard;

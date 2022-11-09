import "./ProductsGallery.css";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductsGallery = ({ title, hideOffer }) => {
	const cards = [];
	for (let i = 0; i < 10; i++) {
		cards.push(<ProductCard key={i} hideOffer={hideOffer} />);
	}
	return (
		<div className="gallery-div">
			<div className="gallery-title">
				<h4>{title}</h4>
				<div className="gallery-link">See all deals</div>
			</div>
			<div className="gallery-products-div">{cards}</div>
		</div>
	);
};

export default ProductsGallery;

import React from "react";
import ProductsGallery from "../Components/ProductsGallery/ProductsGallery/ProductsGallery";

const Deals = () => {
	return (
		<section className="todays-deals-section body-section">
			<ProductsGallery title={"Today's Deals"} />
		</section>
	);
};

export default Deals;

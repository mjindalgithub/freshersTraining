import React from "react";
import ProductsGallery from "../Components/ProductsGallery/ProductsGallery/ProductsGallery";

const Accessories = () => {
	return (
		<section className="accessories-section body-section">
			<ProductsGallery
				title={"Up to 60% off | Car & bike accessories & more"}
				hideOffer={true}
			/>
		</section>
	);
};

export default Accessories;

import React from "react";
import ProductsGallery from "../Components/ProductsGallery/ProductsGallery/ProductsGallery";

const Locals = () => {
	return (
		<section className="local-collection-section body-section">
			<ProductsGallery
				title={"Refresh your home ambiance | Local shops collection"}
				hideOffer={true}
			/>
		</section>
	);
};

export default Locals;

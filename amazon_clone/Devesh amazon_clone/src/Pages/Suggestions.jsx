import React from "react";
import QuadCard from "../Components/QuadCard/QuadCard";

const Suggestions = () => {
	return (
		<section className="cards-suggestion-section body-section">
			<QuadCard title={"Shop & Pay | Earn rewards daily"} />
			<QuadCard title={"Upgrade your home | Amazon Brands & more"} />
			<QuadCard title={"Car & bike essentials | Up to 60% off"} />
			<QuadCard title={"Sign in for your best experience"} />
			<QuadCard
				title={"Top rated, premium quality | Amazon Brands & more"}
			/>
			<QuadCard title={"Shop by Category"} />
			<QuadCard title={"Redefine your living room"} />
			<QuadCard title={"Revamp your home in style"} />
			<QuadCard title={"Up to 60% off | Styles for Men"} hidden={true} />
		</section>
	);
};

export default Suggestions;

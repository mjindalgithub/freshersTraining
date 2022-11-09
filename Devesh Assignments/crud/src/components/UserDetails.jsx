import "./UserDetails.css";
import React, { useEffect, useState } from "react";
import AllUsers from "./AllUsers";
import InpForm from "./InpForm";

const UserDetails = () => {
	const [userArr, setUserArr] = useState(() => {
		if (JSON.parse(localStorage.getItem("users")))
			return JSON.parse(localStorage.getItem("users"));
		else return [];
	});

	useEffect(() => {
		localStorage.setItem("users", JSON.stringify(userArr));
	}, [userArr]);

	return (
		<div className="container">
			<InpForm userArr={userArr} setUserArr={setUserArr} />
			<AllUsers userArr={userArr} setUserArr={setUserArr} />
		</div>
	);
};

export default UserDetails;

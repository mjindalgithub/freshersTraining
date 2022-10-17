import "./InpForm.css";
import React, { useState } from "react";

const InpForm = (props) => {
	const [user, setUser] = useState({
		userName: "",
		email: "",
		mobile: "",
	});

	// const handleChange = (e) => {
	// 	setUser((prevState) => {
	// 		return {
	// 			...prevState,
	// 			userName: e.target.value,
	// 		};
	// 	});
	// };

	const handleSubmit = (e) => {
		e.preventDefault();
		if (user.userName === "" || user.email === "" || user.mobile === "") {
			alert("Please enter all fields.");
		} else {
			props.setUserArr((prev) => [...prev, user]);
			setUser({
				userName: "",
				email: "",
				mobile: "",
			});
		}
	};

	return (
		<div className="inp-form">
			<form>
				<label>
					Enter your name:{" "}
					<input
						type="text"
						name="userName"
						value={user.userName || ""}
						onChange={(e) =>
							setUser((prevState) => {
								return {
									...prevState,
									userName: e.target.value,
								};
							})
						}
					/>
				</label>
				<label>
					Enter your email:{" "}
					<input
						type="email"
						value={user.email || ""}
						onChange={(e) =>
							setUser((prevState) => {
								return {
									...prevState,
									email: e.target.value,
								};
							})
						}
					/>
				</label>
				<label>
					Enter your mobile no.:{" "}
					<input
						type="tel"
						value={user.mobile || ""}
						onChange={(e) =>
							setUser((prevState) => {
								return {
									...prevState,
									mobile: e.target.value,
								};
							})
						}
					/>
				</label>
				<input
					className="submit-btn"
					type="submit"
					onClick={handleSubmit}
				/>
			</form>
		</div>
	);
};

export default InpForm;

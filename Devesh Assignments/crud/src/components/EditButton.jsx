import React from "react";

const EditButton = (props) => {
	const updateUser = () => {
		const updUsers = props.userArr.map((val, index) => {
			if (props.index === index) {
				const uName = prompt("Enter your name", `${val.userName}`);
				const uEmail = prompt("Enter your email", `${val.email}`);
				const uMobile = prompt("Enter your email", `${val.mobile}`);
				return {
					...val,
					userName: uName ? uName : `${val.userName}`,
					email: uEmail ? uEmail : `${val.email}`,
					mobile: uMobile ? uMobile : `${val.mobile}`,
				};
			}
			return val;
		});
		props.setUserArr(updUsers);
	};

	return (
		<button type={"button"} onClick={updateUser}>
			Edit
		</button>
	);
};

export default EditButton;

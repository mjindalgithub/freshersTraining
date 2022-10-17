import React from "react";

const DeleteBtn = (props) => {
	const deleteUser = () => {
		const arr = props.userArr.filter((el, index) => {
			return index !== props.index;
		});
		console.log(arr);
		props.setUserArr(() => arr);
	};

	return (
		<button type={"button"} onClick={deleteUser}>
			Delete
		</button>
	);
};

export default DeleteBtn;

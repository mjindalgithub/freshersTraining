import React from "react";

const InpField = (props) => {
	// const field = props.inpName;
	return (
		<div>
			<label>
				{props.message}
				<input
					value={props.user.userName || ""}
					onChange={(e) =>
						props.setUser((prevState) => {
							return {
								...prevState,
								userName: e.target.value,
							};
						})
					}
				/>
			</label>
		</div>
	);
};

export default InpField;

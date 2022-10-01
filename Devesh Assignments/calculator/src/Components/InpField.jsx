import React, { Component } from "react";
import "./InpField.css";

export default class InpField extends Component {
	render() {
		return (
			<div className="inp-div">
				<input
					id="inp-field"
					type="text"
					placeholder="Enter a number"
					required
				/>
			</div>
		);
	}
}

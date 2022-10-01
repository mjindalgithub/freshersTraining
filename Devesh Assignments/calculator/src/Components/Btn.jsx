import React, { Component } from "react";
import "./Btn.css";

export default class Btn extends Component {
	render() {
		function handleClick(e) {
			const inp = document.getElementById("inp-field");
			if (e.target.innerText !== "=" && e.target.innerText !== "Clr") {
				inp.value += e.target.innerText;
			} else if (e.target.innerText === "=") {
				const result = eval(inp.value);
				if (result) inp.value = result;
			} else {
				inp.value = "";
			}
		}
		return (
			<div className="btn-div">
				<button type="button" onClick={handleClick}>
					{this.props.val1}
				</button>
				<button type="button" onClick={handleClick}>
					{this.props.val2}
				</button>
				<button type="button" onClick={handleClick}>
					{this.props.val3}
				</button>
				<button type="button" onClick={handleClick}>
					{this.props.val4}
				</button>
			</div>
		);
	}
}

/* eslint no-eval: 0 */

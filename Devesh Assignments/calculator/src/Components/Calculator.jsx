import React, { Component } from "react";
import "./Calculator.css";
import Btn from "./Btn";
import InpField from "./InpField";

export default class Calculator extends Component {
	render() {
		return (
			<div className="calculator">
				<InpField />
				<Btn val1="7" val2="8" val3="9" val4="/" />
				<Btn val1="4" val2="5" val3="6" val4="*" />
				<Btn val1="1" val2="2" val3="3" val4="-" />
				<Btn val1="0" val2="Clr" val3="=" val4="+" />
			</div>
		);
	}
}

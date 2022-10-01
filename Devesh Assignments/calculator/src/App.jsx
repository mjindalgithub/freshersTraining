import React from "react";
import "./App.css";
import Calculator from "./Components/Calculator";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Calculator />
			</div>
		);
	}
}

export default App;

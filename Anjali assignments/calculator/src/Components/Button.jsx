import './Button.css';
import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    function btnClick(e) {

      const inp = document.getElementById("inp-field");

      if (e.target.innerText =="CLR") {

        inp.value = "";

      }
      else if (e.target.innerText !== "=") {

          inp.value += e.target.innerText;

      } else {

          inp.value = eval(inp.value);

      } 

  }
    return (
      <>
        <button onClick={btnClick}>{this.props.value1}</button>
        <button onClick={btnClick}>{this.props.value2}</button>
        <button onClick={btnClick}>{this.props.value3}</button>
        {this.props.value4 && <button type="button" onClick={btnClick}>{this.props.value4}</button>} 
        {this.props.value5 && <button type="button" onClick={btnClick}>{this.props.value5}</button>}       
      </>
        
    )
  }
}

import React, { Component } from 'react'
import "./Button.css"

export default class Button extends Component {
  render() {
    
    function buttonClick(e) {
      
      const displayField = document.getElementById("display-field");
      
      if(e.target.innerText === "clr")
      {
        displayField.value = "";
      }
      else if (e.target.innerText !== "=") 
      {
        displayField.value += e.target.innerText;
      } 
      
      else 
      {
        displayField.value = eval(displayField.value);
      }
  }

    return (
      <>
        <button type='button' onClick={buttonClick}>{this.props.value1}</button>
        <button type="button" onClick={buttonClick}>{this.props.value2}</button>
        <button type='button' onClick={buttonClick}>{this.props.value3}</button>
        <button type="button" onClick={buttonClick}>{this.props.value4}</button>
      </>
    )
  }
}

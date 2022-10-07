import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <div>
           <input id="inp-field" type="text" placeholder="Enter a number" required/>
      </div>
     
    )
  }
}

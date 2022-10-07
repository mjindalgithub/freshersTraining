import React, { Component } from 'react'
import './Input.css'

export default class Input extends Component {
  render() {
    return (
        <div className='input-div'>
          <input type="text"  id="display-field" placeholder='Enter a number' required/>
        </div>
    )
  }
}

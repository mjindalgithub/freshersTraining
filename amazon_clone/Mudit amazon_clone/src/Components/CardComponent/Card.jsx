import React from 'react';
import "./Card.css";
function Card(props) {
  return (
 
    <div className={`card-container1 ${props.hidden ? "hidden" : ""}`}>
        <div className='image-container1'>
        {/* <img src="" alt="IMAGE" className='imgg'/> */}
            <p>Image</p>
        </div>
        <div className='card-content1'>
            <div className='card-title'>
                <h3>{props.text}</h3>
            </div>
            <div className='card-body1'>
                <p>{props.text2}</p>
            </div>
        </div>
    </div>

  )
}

export default Card
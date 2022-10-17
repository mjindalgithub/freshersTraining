import axios from 'axios'
import React, { useState } from 'react'
import "./AddUser.css"
  const AddUser = () => {
  const [formData,SetFromData]=useState({
    email:"",
    comment:"",
  })

  const handelformsubmit=async (e)=>
  {
      let response = await axios.post('http://localhost:4000/posts',formData);
    
      if(response){
        alert("data saved");
        window.location.reload();
      }
      else  
        alert("something went wrong");

      SetFromData({
        email: "",
        comment: "",
      });
  }
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-7">
                <h1>Add User Form</h1>
                <div>
                <input type="email" name="name" className='form-control' value={formData.email} onChange={(e)=>SetFromData({...formData,email:e.target.value})}/>
                  E-mail:<br/>
                  <input type="text" name="mail" className='form-control' value={formData.comment} onChange={(e)=>SetFromData({...formData,comment:e.target.value})}/>
                  Comment:<br/>
                  <button onClick={handelformsubmit} type="submit" value="Send"> button</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser

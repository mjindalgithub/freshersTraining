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
      let response = await axios.post('http://localhost:5000/posts',formData);
    
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

    <div class="container">
    <div class="form-wrapper">
        <div class="banner">
            <h1>Hello There!</h1>
            <p>Welcome to Connect Wise</p>
        </div>
        <div class="green-bg">
            <button type="button" onclick="hello()">LEARN MORE</button>


        </div>
        <form class="signup-form">
            <h1>Create Account</h1>
            <p>or use your employee id for registration</p>
           
            <h5>E-mail:<br/></h5> 
            <div class="input-group">
                <i id="name1"></i>
                <input type="email" name="name" value={formData.email} onChange={(e)=>SetFromData({...formData,email:e.target.value})}/>
            </div>
            {/* <div class="input-group">
                <i></i>
                <input type="email"
                placeholder="Email">
            </div> */}
            <h5> Password:<br/></h5> 
            <div class="input-group">
            
                <i  id="pass"></i>
                <input type="password" name="mail" value={formData.comment} onChange={(e)=>SetFromData({...formData,comment:e.target.value})}/>
            </div>
            
            <button  onClick={handelformsubmit} type="submit" value="Send"> Submit</button>
        </form>
    </div>
</div>
  )
}

export default AddUser
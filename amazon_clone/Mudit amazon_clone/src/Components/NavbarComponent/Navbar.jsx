import React from 'react'
import "./Navbar.css";
// import SearchIcon from '@mui/icons-material/Search';
import LogoIcon from "../../images/logo3.png"

function Navbar() {
  return (
    <header>
    <div className='nav'>
        <div className='nav-items'>
            <img src={LogoIcon} alt="" />
        </div>    
        <div className='nav-items2'>
            <h2>Home</h2>
            <h2>Select your address</h2>
        </div>
        <div className='nav-search'>
            <input
                type="text"
                id="header-search"
                name="s" 
            />
            <div className='nav-btnn'>
                <button type="submit">Search</button>
            </div>
        </div>
        <div className='nav-lang'>
            <h6>language</h6>
        </div>
        <div className='nav-sign'>
            <h2>Hello</h2>
            <h2>sign in</h2>
        </div>
        <div className='nav-order'>
            <h2>Returns</h2>
            <h2>& Orders</h2>
        </div>

        <div className='nav-cart'>
            <h4>Cart</h4>
        </div>
    </div>
    </header>
  )
}

export default Navbar

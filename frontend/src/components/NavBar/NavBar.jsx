import React from 'react'
import './NavBar.css'
import {assets} from '../../assets/assets'
const NavBar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo' />
      <ul className='navbar-menu'>
        <li>Home</li>
        <li>Menu</li>
        <li>About Us</li>
        <li>Contact Us</li>

      </ul>
      <div className='navbar-right'>
        <img src = {assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
        <img src = {assets.basket_icon} alt="" />
        <div className='dot'></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default NavBar
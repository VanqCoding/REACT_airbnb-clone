import React from 'react'
import airbnbLogo from '/public/images/airbnb-logo.png';

const Navbar = () => {
  return (
    <nav>
        <img src={airbnbLogo} className="nav--logo" alt="" />
    </nav>
  )
}

export default Navbar
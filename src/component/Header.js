import React from 'react'
import logo from '../images/logo.svg'

function Header() {
  return (
    <div className="my_balance">
      <div className="mybalance">
        <h4>My balance</h4>
        <h1>$921.48</h1>
      </div> 
      <div className="mybalance_img">
            <img src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Header
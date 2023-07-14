import React from "react";

import './index.css'
import logo from '../../images/LOGO.jpg'

const Logo = () => {
  return <div className='logoContainer'>
    <div className="logoImage">
      <img src={logo} alt=""/>
    </div>
    <div className="logoSearch">
      <input type="text"/>
      <button>搜索</button>
    </div>
  </div>
}

export default Logo

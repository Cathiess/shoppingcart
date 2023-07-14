import React, { useContext } from 'react'
import './index.css'
import headerName from '../../const/header-name.json'
import useLocalContext from "../../tools/useLocalContext";

const Header = () => {
  const { state } = useContext(useLocalContext())
  return (<div className="appHeader">
    <div className="headerContainer">
      <div className="headerLeft">
        <span>yancy</span>
        <span>手机逛淘宝</span>
      </div>
      <div className="headerRight">
        {
          headerName.map((item, index) => {
            return <span key={index}>
              {item}
              {item === '购物车' && <span className='shoppingCartNumber'>
                { state.totalCount }
              </span>}
            </span>
          })
        }
      </div>
    </div>
  </div>)
}

export default Header

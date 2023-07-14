import React, {useContext, useEffect } from 'react';
import './index.css';
import useLocalContext from "../../tools/useLocalContext";
import checkAll from "../../tools/checkAll";

const ProductDetailTitle = (props) => {
  const { state, dispatch } = useContext(useLocalContext())

  const checkedItem = () => {
    checkAll(state, dispatch)
  }

  return <div className='detailContainer'>
    {
      props.list.map((item, index) => {
        return (
          <div
            style={{width: item.width + 'px'}}
            key={index}
          >
            {
              item.title === '全选' && <span className={
                state.detailList.length && state.allChecked ?
                  'selectCircle selectCircleActive' :
                  'selectCircle'
              }
              onClick={() => {
                checkedItem()
              }}
              >{state.allChecked} </span>
            }
            { item.title }
          </div>
        )
      })
    }
  </div>
}

export default ProductDetailTitle

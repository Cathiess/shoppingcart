import React from 'react';
import './index.css';
import '../ProductDetailTitle/index.css'
import LayoutMethod from './operationList'

const productItem = (props) => {
  return <div>
    {
      props.pList.map((item, listIndex) => {
        return <div className='itemContent' key={listIndex}>
          {
            props.list.map((child, index) => {
              return (
                <div
                  style={{width: child.width + 'px', height: '100%'}}
                  key={index}
                >
                  <LayoutMethod item={item} index={index} listIndex={listIndex}> </LayoutMethod>
                </div>
              )
            })
          }
        </div>
      })
    }
  </div>
}

export default productItem

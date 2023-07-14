import React, { useContext }  from 'react';
import './index.css';

import ProductItem from "../ProductItem";
import useLocalContext from "../../tools/useLocalContext";
const ProductList = (props) => {

  const titleList = JSON.parse(JSON.stringify(props.list))
  const { state } = useContext(useLocalContext())

  titleList.map(item => {
    if (item.title === '') {
      item.width += 35
    } else if (item.title === '全选') {
      item.width -= 35
    }
    return item
  })
  return <div className='listContainer'>
    <ProductItem
      list={props.list}
      pList={state.detailList}
    ></ProductItem>
  </div>
}

export default ProductList

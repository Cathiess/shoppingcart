import React, { useContext } from "react";
import "./index.css"
import useLocalContext from "../../tools/useLocalContext";
import resetAll from "../../tools/resetAll";

const AllProduct = () => {
  const {state, dispatch} = useContext(useLocalContext())

  const addPhone = () => {
    dispatchList('phone')
  }

  const addMac = () => {
    dispatchList('mac')
  }

  const addKey = () => {
    dispatchList('key')
  }

  const dispatchList = (name) => {
    if (state.list.includes(name)) {
      const detailList = state.detailList.map(item => {
        if (item.img === name) {
          item.count = ~~item.count + 1
        }
        return item
      })
      dispatch({
        type: 'detailList',
        detailList
      })
      return
    }
    dispatch({
      type: 'list',
      list: [...state.list, name]
    })
  }

  return <div className="allProductContainer">
    <div className='productItem'>
      全部商品
      <span>
        { state.totalCount }
      </span>
    </div>
    <div className='addContent'>
      <div className='addProduct' onClick={() => { addPhone() }}>
        添加手机
      </div>
      <div className='addProduct' onClick={() => { addMac() }}>
        添加电脑
      </div>
      <div className='addProduct' onClick={() => { addKey() }}>
        添加键盘
      </div>
    </div>
    <div className='productCount'>
      已选商品（不包含运费）
      <span className='totalNumber'>
        { state.totalPrice }
      </span>
      <span
        className={state.allChecked ? 'totalButton totalButtonActive' : 'totalButton'}
        onClick={() => { resetAll(dispatch) }}
      >
        结算
      </span>
    </div>
  </div>
}

export default AllProduct

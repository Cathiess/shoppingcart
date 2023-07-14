import React, { useContext } from "react";
import './index.css'
import useLocalContext from "../../tools/useLocalContext";
import resetAll from "../../tools/resetAll";

const Bottom = () => {
  const { state, dispatch } = useContext(useLocalContext())
  return <div className='bottomContent'>
    <div className='bottom'>
      <div>
        <span className={
          state.detailList.length && state.allChecked ? "selectCircle selectCircleActive" : 'selectCircle'
        }> </span>
        全选
      </div>
      <div className='delete'>
        删除
      </div>
      <div className='bottomRight'>
        已选
        <span className='count'>{state.totalCount}</span>
        件 商品
        合计（不含运费）：
        <span className='total'>{state.totalPrice}</span>
        <div
          className={state.allChecked ? 'button buttonActive' : 'button'}
          onClick={() => { resetAll(dispatch) }}
        >
          结算
        </div>
      </div>
    </div>
  </div>
}

export default Bottom

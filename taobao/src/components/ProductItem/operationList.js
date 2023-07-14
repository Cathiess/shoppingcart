import React, { useContext, useState } from "react";
import phone from '../../images/phone.jpg'
import mac from '../../images/mac.jpg'
import key from '../../images/key.jpg'
import useLocalContext from "../../tools/useLocalContext";

const imgData = {
  phone,
  mac,
  key
}

const LayoutMethod = (props) => {
  const {item} = props
  const {state, dispatch} = useContext(useLocalContext())

  const [largeImgName, setLargeImgName] = useState('')

  const totalLargeImg = () => {
    if (largeImgName) {
      setLargeImgName('')
      return
    }
    setLargeImgName('showLarge')
  }

  const deleteProduct = (listIndex) => {
    const newList = state.list.filter((item, index) => index !== listIndex)
    dispatchList(newList)
  }

  const checkedItem = (listIndex) => {
    const newList = state.detailList.map((item, index) => {
      if(index === listIndex) item.checked = !item.checked
      return item
    })
    dispatchDetailList(newList)
  }

  const dispatchList = (list) => {
    dispatch({
      type: 'list',
      list
    })
  }

  const dispatchDetailList = (detailList) => {
    dispatch({
      type: 'detailList',
      detailList
    })
  }

  const layoutData = {
    layout0(listIndex) {
      return <div className='selectContent' onClick={() => {
        checkedItem(listIndex)
      }}>
        <span className={item.checked ? 'selectCircle selectCircleActive' : 'selectCircle'}> </span>
      </div>
    },
    layout1() {
      return <div
        className='productMessage'
        onMouseEnter={() => { totalLargeImg() }}
        onMouseLeave={() => { totalLargeImg() }}
      >
        <div className='messageImg'>
          <img src={imgData[item.img]} alt=""/>
        </div>
        <div className={`largeImg ${largeImgName}`}>
          <img src={imgData[item.img]} alt=""/>
        </div>
        <div className='messageName'>
          {`${props.listIndex}-${item.name}`}
        </div>
      </div>
    },
    layout2() {
      return <div className='config'>
        <div>
          {item.config}
        </div>
      </div>
    },
    layout3() {
      return <div className='count'>
        <div>
          ￥{item.price}
        </div>
      </div>
    },
    layout4() {
      return <div className='number'>
        <div>
          <span>-</span>
          <span className='input'>{item.count}</span>
          <span>+</span>
        </div>
      </div>
    },
    layout5() {
      return <div className='count blink'>
        <div>
          ￥{item.count * item.price}
        </div>
      </div>
    },
    layout6(listIndex) {
      return <div className='operation'>
        <div onClick={() => { deleteProduct(listIndex) }}>
          删除
        </div>
      </div>
    },
  }
  return (
    layoutData[`layout${props.index}`](props.listIndex)
  )
}


export default LayoutMethod

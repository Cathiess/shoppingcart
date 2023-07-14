import { useState, useEffect } from 'react'
import productDetail from "../const/product-detail.json";
import computedTotal from "./computedTotal";

const useList = (state, dispatch) => {
  const [pList, setPList] = useState([])
  const { list, detailList } = state
  useEffect(() => {
    const detailList = list.map(item => {
      const detail = productDetail[item]
      if (!detail.count) {
        detail.count = 1
      }
      return detail
    })

    setPList(detailList)
    dispatch({
      type: 'detailList',
      detailList
    })
  }, [list])

  useEffect(() => {
    computedTotal(state, dispatch)
  }, [detailList])

  return [
    pList,
    setPList
  ]
}

export default useList

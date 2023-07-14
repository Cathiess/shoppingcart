const computedTotal = (state, dispatch) => {
  let totalCount = 0
  let totalPrice = 0
  let allChecked = false
  const { detailList } = state
  detailList.forEach(item => {
    totalCount += item.count;
    totalPrice += item.count * ~~(item.price)
  })

  allChecked = detailList.every(item => item.checked)

  dispatch({
    type: 'totalCount',
    totalCount
  })
  dispatch({
    type: 'totalPrice',
    totalPrice: totalPrice.toFixed(2)
  })
  dispatch({
    type: 'allChecked',
    allChecked
  })
}

export default computedTotal

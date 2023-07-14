const resetAll = (dispatch) => {
  alert('结算成功')

  const data = {
    list: [],
    detailList: [],
    totalCount: 0,
    totalPrice: 0,
    allChecked: false
  }
  Object.keys(data).forEach(item => {
    dispatch({
      type: item,
      [item]: data[item]
    })
  })
}

export default resetAll

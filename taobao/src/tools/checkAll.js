const checkAll = (state, dispatch) => {
  const newList = state.detailList.map(item => {
    let status = state.allChecked

    item.checked = !status
    return item
  })
  dispatch({
    type: 'detailList',
    detailList: newList
  })
}

export default checkAll

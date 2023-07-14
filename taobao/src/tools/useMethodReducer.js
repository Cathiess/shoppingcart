import { useReducer } from "react";

const store = {
  list: [],
  detailList: [],
  totalCount: 0,
  totalPrice: 0,
  allChecked: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "list" :
      return {
        ...state, list: action.list
      };
    case "totalCount" :
      return {
        ...state, totalCount: action.totalCount
      };
    case "totalPrice" :
      return {
        ...state, totalPrice: action.totalPrice
      };
    case "allChecked" :
      return {
        ...state, allChecked: action.allChecked
      };
    case "detailList" :
      return {
        ...state, detailList: action.detailList
      };
  }
}

const useMethodReducer = () => {
  const [state, dispatch] = useReducer(reducer, store)
  return [
    state, dispatch
  ]
}

export default useMethodReducer

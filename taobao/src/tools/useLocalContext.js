import React from 'react'

// 引用单例模式，将context做唯一处理
const LocalContext = () => {
  let context
  return () => {
    if (!context) {
      context = React.createContext(null)
    }
    return context
  }
}

export default LocalContext()

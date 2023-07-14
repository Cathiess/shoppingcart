import React from 'react';
import './App.css';

// 引入头部组件
import Header from "../components/Header/index";
// 引入logo组件
import Logo from '../components/Logo/index'
// 引入产品导航组件
import AllProduct from "../components/AllProduct";
// 引入详情标题
import ProductDetailTitle from "../components/ProductDetailTitle";
// 引入已选商品列表
import ProductList from "../components/ProductList";
// 引入底部组件
import Bottom from "../components/Bottom";

// 引入列表信息
import useList from '../tools/useList'
// 引入头部信息
import productTitle from '../const/product-title.json'
// 引入引用信息
import useLocalContext from '../tools/useLocalContext'
// 引入状态信息
import useMethodReducer from "../tools/useMethodReducer";

const App = () => {
  const Context = useLocalContext() //
  const [state, dispatch] = useMethodReducer()

  const [pList] = useList(state, dispatch)

  const api = {state, dispatch}

  return (
    <div className="App">

      <Context.Provider value={api}>

        <Header> </Header>

        <Logo> </Logo>

        <AllProduct> </AllProduct>

        <ProductDetailTitle
          list={productTitle}
        > </ProductDetailTitle>

        <ProductList
          list={productTitle}
          pList={pList}
        > </ProductList>

        <Bottom> </Bottom>
      </Context.Provider>
    </div>
  );
}

export default App;

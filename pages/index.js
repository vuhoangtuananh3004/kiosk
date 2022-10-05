import React from "react";
import MainSection from "../components/View/MainSection"
import { Provider } from "react-redux";
import store from "../Store/store"
function index() {


  return (
    <div>
      <Provider store={store}>
        <MainSection/>
      </Provider>
    </div>
  )
}

export default index

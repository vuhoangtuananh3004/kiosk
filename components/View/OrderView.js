import React from 'react'
import ItemBox from '../CustomerView/ItemBox'

function OrderView() {

  return (
    <div>
      <div className="flex justify-center p-5">
        <button className="bg-indigo-400 self-auto text-6xl hover:bg-sky-500 duration-200 p-5 m-5">
          Change Menu
        </button>
        <button className="bg-indigo-400 self-auto text-6xl hover:bg-sky-500 duration-200 p-5 m-5">
          Place Order
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
      </div>
    </div>
  )
}

export default OrderView

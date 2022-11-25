import React from 'react'

function ItemBox() {

  return (
    <div className = "relative p-5 m-5 h-96 w-96 shadow-2xl bg-gray-100">
        <div className = "text-2xl font-bold">Cheeseburger</div>
        <img src="https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY="></img>
        <div>Juicy cheeseburger with patty, lettuce, and tomatoes.</div>
        <div className = "flex justify-center">
          <button className="bg-blue-300 p-2 hover:bg-gray-300 duration-200">Add to order</button>
        </div>
    </div>
  )
}

export default ItemBox

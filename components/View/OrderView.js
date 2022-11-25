import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import React, { useEffect, useState } from 'react'
import ItemBox from '../CustomerView/ItemBox'
import db from '../../firebaseConfig'

function OrderView() {
  const [menu, setMenu] = useState([])
  async function addItemsFromDatabase() {
    const querySnapshot = await getDocs(collection(db, "menu"));
    const menus = [];
    querySnapshot.forEach(doc => {
      menus.push(doc.data());
    });
    setMenu(menus)
  }
  useEffect(() => {
    addItemsFromDatabase()
  }, [])
  return (
    <div>
      <div className="flex justify-center p-5">
        <button className="bg-indigo-400 self-auto text-6xl hover:bg-sky-500 duration-200 p-5 m-5">
          Place Order
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {menu.map((item) => (
          <div className="relative p-5 m-5 h-96 w-96 shadow-2xl bg-gray-100" key={item.id}>
            <div className="text-2xl font-bold">{item.name}</div>
            <img src="https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY="></img>
            <div>Juicy cheeseburger with a side of pickles</div>
            <div className="flex justify-center">
              <button className="bg-blue-300 p-2 hover:bg-gray-300 duration-200">Add to order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderView

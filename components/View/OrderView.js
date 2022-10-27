import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import React from 'react'
import ItemBox from '../CustomerView/ItemBox'
import { SignalWifiStatusbarConnectedNoInternet4Sharp } from '@mui/icons-material';
import db from '../../firebaseConfig'
import { jsonEval } from '@firebase/util';

function OrderView() {
  addItemsFromDatabase()
  return (
    <div>
      <div className="flex justify-center p-5">
        <button className="bg-indigo-400 self-auto text-6xl hover:bg-sky-500 duration-200 p-5 m-5">
          Place Order
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
      </div>
    </div>
  )
}

async function addItemsFromDatabase(){
  const querySnapshot = await getDocs(collection(db,"menu"));
  var menus = [];
  querySnapshot.forEach(doc =>{
    menus.push(doc.data());
  });
  console.log(menus);
}



export default OrderView

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import ItemModel from '../ItemsCard/ItemModel'
import {reloadModel} from '../../features/model/itemModelSlice'
import AddProducts from '../ItemsCard/AddProducts';

function MenuView(props) {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(reloadModel())
  },[])
  return (
    <div className='flex w-full h-full p-5'>
        <div className='grid grid-cols-4 gap-5'>
          <AddProducts/>
          <ItemModel name={props.name}/>
          </div>
    </div>
  )
}

export default MenuView
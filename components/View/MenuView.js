import React from 'react'
import ItemModel from '../ItemsCard/ItemModel'

function MenuView(props) {

  return (
    <div className='flex w-full h-full p-5'>
        <div className='grid grid-cols-4 gap-5'>
          <div className='flex w-[200px] h-[200px] border border-dashed border-slate-900 rounded-[30px]'></div>
          <ItemModel name={props.name}/>
          </div>
    </div>
  )
}

export default MenuView
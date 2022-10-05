import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setRequestMenu} from '../../features/hotel/menuSlice'

function MenuCard(props) {
    const dispatch = useDispatch();

    const changeMenu = () =>{
        dispatch(setRequestMenu(props.name))
    }
  return (
    <div className='text-bold text-xl border border-slate-900 p-2 rounded-full pl-4 pr-4 hover:bg-slate-900/20 cursor-pointer' onClick={changeMenu}>{props.name}</div>
  )
}

export default MenuCard
import React from 'react'
import { useSelector } from 'react-redux'

import MenuBar from '../Menu/MenuBar'
import MenuView from './MenuView'


function ManagerView() {
  const requestMenu = useSelector(state => state.menu.requestMenu)
  return (
    <div>
      <MenuBar/>
      {
        (requestMenu) ? <MenuView key={requestMenu} name={requestMenu}/> : <></>
      }
    </div>
  )
}

export default ManagerView
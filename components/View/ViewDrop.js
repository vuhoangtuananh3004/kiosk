import React, { useContext } from 'react'
import ViewContext from '../Context/ViewContext'

function ViewDrop() {
    const { view, setView } = useContext(ViewContext)
    const popUp = true
    
    const displayPopup = (type) => {
        let temp = document.getElementById('options')
        if (popUp) {
            temp.classList.remove('hidden')
            popUp = !popUp
        } else {
            temp.classList.add('hidden')
            popUp = !popUp
        }
     if (typeof type === "string"){
        setView(type)
     }

    }
    return (
        <div className='flex flex-col'>
            <button onClick={displayPopup} id='view'>{view}</button>
            <div className='flex w-[500px] justify-between mx-auto text-sm mt-3 hidden' id='options'>
                <button className='p-1 pr-5 pl-5  border border-white-900 hover:bg-yellow-900/40 rounded-full' onClick={() => displayPopup('Manager Station')}>Manager Station</button>
                <button className='p-1 pr-5 pl-5  border border-white-900 hover:bg-yellow-900/40 rounded-full' onClick={() => displayPopup('Order Station')}>Order Station</button>
                <button className='p-1 pr-5 pl-5  border border-white-900 hover:bg-yellow-900/40 rounded-full' onClick={() => displayPopup('Display Station')}>Display Station</button>
            </div>
        </div>
    )
}

export default ViewDrop
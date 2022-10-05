import React, { useContext, useState } from 'react'
import AddMenuContext from '../Context/AddMenuContext'
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch } from 'react-redux';
import { checkMenuAvaible } from '../../features/hotel/menuSlice';
function AddMenuModal() {
  const { setModal, menuDoc } = useContext(AddMenuContext);
  const [disabledAddBtn, setDisableAddBtn] = useState(true);
  const [disabledDeleteBtn, setDisableDeleteBtn] = useState(true);
  const cancel = () => {
    setModal(false)
  }
  const menuTitle = (e) => {
    let temp = e.target.value.replace(/[^A-Z0-9]+/ig, '')
    const found = menuDoc.data.some(element => element.name.toLowerCase() === temp.toLowerCase())
    if (e.target.value === '') {
      setDisableAddBtn(true)
      setDisableDeleteBtn(true)
    } else {
      if (found) {
        setDisableAddBtn(true)
        setDisableDeleteBtn(false)
      } else {
        setDisableDeleteBtn(true)
        setDisableAddBtn(false)
      }
    }
    console.log(disabledAddBtn);
  }
  
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 ">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-2/3 lg:w-1/3">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 text-[40px] flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <SettingsIcon fontSize='inherit' />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h1 className="text-xl font-medium leading-6 text-gray-900" id="modal-title">Edit</h1>
                  <div className="flex flex-row mt-2 justify-center align-center items-center">
                    {/* <p className="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p> */}
                    <span className='mr-4'>Menu Title: </span>
                    <input className='outline rounded-full p-1 w-[300px] text-center mr-5' type='text' id='menuTitle' placeholder='Type your new/delete menu-title' onKeyUp={menuTitle} />
                    {
                      (disabledAddBtn && disabledDeleteBtn) ? <></> :
                      (disabledAddBtn) ? <span className='font-bold text-md text-red-900'> Menu is existed</span> : <span className='font-bold text-md text-green-900'> Menu is available</span>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled" onClick={cancel} >Cancel</button>
              <button type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" disabled={disabledDeleteBtn} >Delete</button>
              <button type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-greed-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" disabled={disabledAddBtn} >Add</button>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default AddMenuModal
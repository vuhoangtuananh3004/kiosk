import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import CreateProducts from './CreateProducts';
import { reloadModel, addProduct } from '../../features/model/itemModelSlice'
import { useDispatch, useSelector } from 'react-redux';
import AddProductContext from '../Context/AddProductContext';

const productInitialState = {
    name: '',
    url: 'https://tcdn.tchpt.com/admin/aux?b=c1~4066c4e45b62c35f92d362574ab3a0c91&a=c1~65&f=image____2018-10-30_18-10-20.png',
    toppings:[]
}

function AddProducts() {
    const [settingMode, setMode] = useState(false);
    const dispatch = useDispatch()
    const [productInfo, setProductInfo] = useState(productInitialState)
    // const products = useSelector(state => state.model.products)

    useEffect(()=>{
    },[])

    const turnOnSetting = () => {
        dispatch(reloadModel())
        setMode(true)
    }
    const done = () => {
        setMode(false)
        console.log(productInfo);
    }




    return (
        <div className='flex w-[200px] h-[200px] border border-dashed border-slate-900 rounded-[30px] justify-center items-center text-[100px] hover:bg-green-800/20 cursor-pointer'>
            <AddProductContext.Provider value={{productInfo, setProductInfo}} >
                {
                    (!settingMode) ? <AddIcon fontSize='inherit' onClick={turnOnSetting} /> :
                        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                            <div className="fixed inset-0 z-10 overflow-y-auto">
                                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                    <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-8 sm:w-4/6">
                                        <CreateProducts />
                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:w-full  sm:px-6 justify-center">
                                            <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={done}>Done</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </AddProductContext.Provider>
        </div>
    )
}

export default AddProducts
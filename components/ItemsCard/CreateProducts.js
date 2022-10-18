import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reloadModel } from '../../features/model/itemModelSlice'
import AddProductContext from '../Context/AddProductContext'

// const initialState = {
//     toppings: [],
// }
const productInitialState = {
    name: '',
    url: 'https://tcdn.tchpt.com/admin/aux?b=c1~4066c4e45b62c35f92d362574ab3a0c91&a=c1~65&f=image____2018-10-30_18-10-20.png',
    toppings:[]
}

function CreateProducts() {
    const dispatch = useDispatch();
    const {productInfo, setProductInfo} = useContext(AddProductContext);
    const toppingModel = useSelector(state => state.model.models)
    const [toppings, setToppings] = useState()
    // const [productInfo, setProductInfo] = useState(productInitialState)
    // const [productModel, setProductModel] = useState(initialState)


    useEffect(() => {
        setToppings(toppingModel.data)
        console.log("reload");
    }, [toppingModel.isLoading])

    const setName = (e) => {
        let temp = e.target.value
        setProductInfo({ ...productInfo, name: temp })
    }
    const setUrl = (e) => {
        let temp = e.target.value
        setProductInfo({ ...productInfo, url: temp })
    }
    const modifyQuantity = (top, data, request) => {
        let updatedList = toppings.map(item => {
            let updateToppingQuantity = item.toppings.map(i => {
                if (i.name === data.name && data.quantity > 0 && request === "SUB") {
                    return { ...i, quantity: data.quantity - 1 }
                }
                if (i.name === data.name && request === "ADD") {
                    return { ...i, quantity: data.quantity + 1 }
                }
                return i
            }
            )
            if (item.name === top.name) {
                return { ...item, toppings: updateToppingQuantity }
            }
            return item
        })
        setToppings(updatedList)
        setProductInfo({...productInfo, toppings: updatedList});
    }
    return (
        <div className='flex flex-col w-full justify-center items-center '>
            {
                (!productInfo.name) ? <div className='text-[24px] text-slate-400 mb-5'>Set Your Product Name</div> : <span className='text-[24px] mb-5'>{productInfo.name}</span>
            }
            {
                (!productInfo.url) ? <div className='text-[24px] text-slate-400'>Set Your Image Url</div> : <div><img src={productInfo.url} className='h-[100px] text-[24px]' alt='invalid url' /></div>
            }
            {/* ---------------------Topping card ---------------------- */}
            {
                (!toppingModel.isLoading) ? <>
                    {toppings.map(topping =>
                        <div className='flex flex-col w-full p-2 justify-center items-center mt-5' key={topping.name}>
                            <div className='flex w-3/4 border border-dashed border-top border-slate-900/20'></div>
                            <span className='text-[18px] p-5'>{topping.name}</span>
                            {/* ------- */}
                            <div className='grid grid-cols-5 gap-6 pl-5 pr-5'>
                                {topping.toppings.map(data =>
                                    <div className='flex flex-col w-[130px] text-[15px]' key={data.name}>
                                        <div className="flex flex-row w-full items-center border ${props.value.style} border-slate-900 rounded-l-full rounded-r-full p-2 bg-slate-100">
                                            <div className='w-[30px]' onClick={() => modifyQuantity(topping, data, "SUB")}>-</div>
                                            <div className='w-[70px] border-l border-r border-slate-900'>{data.quantity}</div>
                                            <div className='w-[30px]' onClick={() => modifyQuantity(topping, data, "ADD")}>+</div>
                                        </div>
                                        <p className='mt-1'>{data.name}</p>
                                    </div>
                                )}
                            </div>
                            {/* ------- */}
                        </div>

                    )}
                </> : <>Loading</>
            }
            {/* ---------------------Adding Title and URL ---------------------- */}
            <div className='flex w-full border border-top border-slate-900 mt-5'></div>
            <div className='flex flex-col w-3/7 justify-center text-[16px] p-4'>
                <input className='text-center border border-slate-900 rounded-full p-1 mb-2' placeholder='set product name' onKeyUp={setName} />
                <input className='text-center border border-slate-900 rounded-full p-1' placeholder='set image url' onKeyUp={setUrl} />
            </div>
        </div>
    )
}

export default CreateProducts
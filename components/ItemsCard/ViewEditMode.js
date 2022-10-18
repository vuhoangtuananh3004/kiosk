import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateNewIngredient, reloadModel, model, upgradeIngredient } from '../../features/model/itemModelSlice'
import ToppingCard from './ToppingCard'
import DeleteIcon from '@mui/icons-material/Delete';
import { removeModel } from '../../features/firebaseFunction'

const newTopping = {
    name: '',
    quantity: '0',
    style: 'border-dotted'
}

function ViewEditMode(props) {
    let temp = props.modelObj.toppings
    const [showModels, setModels] = useState()
    const dispatch = useDispatch()
    const models = useSelector(state => state.model.models)

    useEffect(() => {
        setModels(models.data)
    }, [models, models.isLoading])

    const removeTopping = (data, toppingData) => {
        const temp = data;
        let copyModels = models.data
        temp = temp.toppings.filter(topping => topping.name != toppingData.name)
        const updatedModels = copyModels.map(obj => obj.name === data.name ? { ...obj, toppings: temp } : obj)
        dispatch(upgradeIngredient(updatedModels))
    }

    const removeModelTopping = (nameModel) =>{
        let copyModels = models.data
        copyModels = copyModels.filter(name => name.name != nameModel)
        dispatch(upgradeIngredient(copyModels))
    }
    return (
        <div className='flex flex-col text-[25px] p-2'>
            <div className='flex flex-row p-2'>
                {
                    (!showModels) ? <></> :
                        <>
                            <div className='w-full p-5'>
                                {(showModels.map(data =>
                                    <div className='relative' key={data.name} >
                                        <div className='flex flex-col items-start' value={data.name}>
                                            <p className='text-[20px] font-bold p-2'>{data.name}</p>
                                            <div className='absolute right-0'><DeleteIcon color='error' onClick={() => removeModelTopping(data.name)}/></div>
                                            <div className='grid grid-cols-5 gap-6'>
                                                {
                                                    data.toppings.map(toppingData =>
                                                        <div className='relative' key={toppingData.name}>
                                                            <ToppingCard value={toppingData} />
                                                            <div className='absolute top-[-5px] right-[-5px] text-sm text-red-400 font-black' onClick={() => removeTopping(data, toppingData)}>x</div>
                                                        </div>
                                                    )
                                                }
                                                <ToppingCard key={newTopping.name} value={newTopping} name={data.name} />
                                            </div>
                                            <div className='w-full  border-b-2 border-slate-300 p-3'></div>
                                        </div>
                                    </div>
                                )
                                )}
                            </div>
                        </>
                }
            </div>
            {
                (!props.modelObj.name) ? <></> : <>  <p className='text-[20px] font-bold p-2'>{props.modelObj.name}</p>
                    {(!props.modelObj.toppings) ? <></>
                        : <div className='w-full pl-5'>
                            <div className='grid grid-cols-5 gap-6'>
                                {temp.map(doc =>
                                    <ToppingCard key={`${doc.name} + 1`} value={doc} />
                                )}
                            </div>
                        </div>
                    }
                </>
            }

            <div className='w-full border border-dashed border-slate-900/20 h-[1px] mt-5 mb-5' />
        </div>
    )
}

export default ViewEditMode
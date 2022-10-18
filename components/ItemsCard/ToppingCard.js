
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { upgradeIngredient, editModel } from '../../features/model/itemModelSlice'

function ToppingCard(props) {
    const models = useSelector(state => state.model.models)
    const dispatch = useDispatch();
    
    const checkIngredientTitleExist = (ingredientsName) => {
        if (models.data.length > 0) {
            let checkModelsTitle = models.data.find(o => o.name === ingredientsName)
            return (checkModelsTitle) ? true : false
        }
        return false
    }
    const checkIngredientToppingExist = (toppingName) => {
        if (models.data.length > 0) {
            for (let i = 0; i < models.data.length; i++) {
                let temp = models.data[i]
                if (temp.toppings.find(o => o.name === toppingName)){
                    return true;
                }
            }
        }
        return false;
    }
    const addTopping = (e) => {
        console.log(props.name);
        if (e.key === 'Enter' && e.target.value != '') {
            const addNewTopping = {
                action: 'ADD',
                newTopping: {
                    name: e.target.value,
                    quantity: 0
                }
            }
            console.log(checkIngredientToppingExist(e.target.value));
            if (!checkIngredientToppingExist(e.target.value)) {
                let copyModels = models.data
                const updatedModels = copyModels.map(obj => obj.name === props.name ? {...obj, toppings: [...obj.toppings, addNewTopping.newTopping]} : obj)
                dispatch(upgradeIngredient(updatedModels))
            }
            e.target.value = ''
        }

    }

    return (
        <div className='flex flex-col w-[130px] text-[15px]'>
            <div className={`flex flex-row w-full items-center border ${props.value.style} border-slate-900 rounded-l-full rounded-r-full p-2 bg-slate-100 z-2`}>
                <div className='w-[30px]'>-</div>
                <div className='w-[70px] border-l border-r border-slate-900' key={props.value.quantity}>{props.value.quantity}</div>
                <div className='w-[30px]'>+</div>
            </div>
            {
                (props.value.name) ? <p className='mt-1'>{props.value.name}</p> :
                    <input className='flex w-full text-center border boder-slate-400 mt-1 rounded-full' placeholder='add new topping' onKeyPress={addTopping}></input>
            }
        </div>
    )
}

export default ToppingCard
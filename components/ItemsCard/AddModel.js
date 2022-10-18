import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewEditMode from './ViewEditMode';
import { useDispatch, useSelector } from 'react-redux';
import { addNewIngredient, reload } from '../../features/model/itemModelSlice'
import {AddToppingContext} from '../Context/AddToppingContext'

const initialState = {
    name: '',
    toppings: [],
}

function AddModel() {
    const dispatch = useDispatch();
    const models = useSelector(state => state.model.models)
    const [ingredients, setIngredients] = useState(
        {
            name: '',
            toppings: [],
        });

    const [topping, setTopping] = useState({
        name: '',
        quantity: 0,
    })

    const ingredientTitle = (e) => {
        let temp = e.target.value.replace(/[^A-Z0-9]+/ig, '')
        temp = e.target.value.toUpperCase()
        setIngredients({ ...ingredients, name: temp })
    }

    const setToppingName = (e) => {
        let temp = e.target.value.toLowerCase()
        setTopping({ ...topping, name: temp, quantity: 0 })
    }

    const addToppingToModel = () => {
        if (ingredients.toppings.length === 0) {
            setIngredients({
                ...ingredients,
                toppings: [...ingredients.toppings, topping]
            })
        } else {
            let temp = ingredients.toppings.find(o => o.name === topping.name)
            if (!temp) {
                setIngredients({
                    ...ingredients,
                    toppings: [...ingredients.toppings, topping]
                })
            }
        }
        let tempInpTopping = document.getElementById('getToppingInput')
        tempInpTopping.value = ''
    }

    const checkIngredientTitleExist = () => {
        if (models.data.length > 0) {
            let checkModelsTitle = models.data.find(o => o.name === ingredients.name)
            return (checkModelsTitle) ? true : false
        }
        return false
    }
    const checkIngredientToppingExist = () => {
        if (models.data.length > 0) {
            for (let i = 0; i < models.data.length; i++) {
                let temp = models.data[i]
                return (temp.toppings.find(o => o.name === topping.name)) ? true : false
            }
        }
        return false;
    }

    const save = () => {
        if (!checkIngredientTitleExist() && !checkIngredientToppingExist() && ingredients.name) {
            dispatch(addNewIngredient(ingredients))
        }
        let tempInpTitle = document.getElementById('getTitleInput');
        let tempInpTopping = document.getElementById('getToppingInput')
        tempInpTitle.value = ''
        tempInpTopping.value = ''
        setIngredients(initialState)
    }
    return (
        <div className='flex flex-col p-5'>
            {/* <AddToppingContext.Provider value={{}}> */}
                <ViewEditMode modelObj={ingredients}/>
                <div className='flex flex-row w-full justify-center'>
                    <input className='border border-slate-900 w-1/4 h-[40px] rounded-[10px] mr-6 text-[15px] text-center' placeholder='Typing Ingredient Title' id='getTitleInput' onKeyUp={ingredientTitle} />
                    <input className='border border-slate-900 w-1/4 h-[40px] rounded-[10px] mr-6 text-[15px] text-center' placeholder='Add topping to Ingredient section' id='getToppingInput' onKeyUp={setToppingName} />
                    <button className='flex justify-center items-center text-[30px] h-[40px] border border-slate-900 p-3 rounded-[10px] mr-3 bg-green-700' onClick={addToppingToModel}><AddIcon fontSize='inherit' /></button>
                    <button type="button" onClick={save} className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-greeb-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Save</button>

                </div>
            {/* </AddToppingContext.Provider> */}
        </div>
    )
}

export default AddModel
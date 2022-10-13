import { createSlice } from '@reduxjs/toolkit'
import { addNewDoc, removeDoc, createModel, loadModelData } from '../firebaseFunction'

const initialState = {
    models: {
        data: [],
        isLoading: true,
    }
}

const checkIngredientToppingExist = (models, toppingName) => {
    if (models.data.length > 0) {
        for (let i = 0; i < models.data.length; i++) {
            let temp = models.data[i]
            return (temp.toppings.find(o => o.name === toppingName)) ? true : false
        }
    }
    return false;
}

export const itemModelSlice = createSlice({
    name: 'model',
    newIngredients: {},
    initialState,
    reducers: {
        modelHandle: (state, action) => {

        },
        addNewIngredient: (state, action) => {
            state.models.data = [...state.models.data, action.payload];
            state.models.isLoading = false;
        },
        upgradeIngredient: (state, action) => {
            state.models.data = action.payload;
        },
        reload: (state) => {
            state.models.isLoading = true;
        },
        addModelToDatabase: (state, action) =>{
            (async () => {
                await createModel('models', action.payload, state.models)
              })();
        },
        loadModel: (state) => {
            loadModelData().then(data => console.log(data))
        }
    }
})

// Action creators are generated for each case reducer function
export const { modelHandle, addNewIngredient, reload, upgradeIngredient, editModel, addModelToDatabase, loadModel } = itemModelSlice.actions

export default itemModelSlice.reducer
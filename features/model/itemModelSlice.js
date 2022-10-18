import { Satellite } from '@mui/icons-material'
import { createSlice } from '@reduxjs/toolkit'
import { addNewDoc, removeDoc, createModel, loadModelData } from '../firebaseFunction'

const initialState = {
    models: {
        data: [],
        isLoading: true,
    },
    products:{
        data: [],
        isLoading: true
    }
}

export const itemModelSlice = createSlice({
    name: 'model',
    newIngredients: {},
    initialState,
    reducers: {
        addNewIngredient: (state, action) => {
            state.models.data = [...state.models.data, action.payload];
        },
        upgradeIngredient: (state, action) => {
            state.models.data = action.payload
        },
        reloadModel: (state) => {
            state.models.isLoading = true
        },
        addModelToDatabase: (state, action) => {
            (async () => {
                await createModel('models', action.payload, state.models, state.products)
            })();
            state.models.isLoading = true
        },
        loadModel: (state, action) => {
            state.models = {...action.payload};
            state.models.isLoading = false
        },
        addProduct: (state, action) =>{

        },
    }
})

// Action creators are generated for each case reducer function
export const {addNewIngredient, reloadModel, upgradeIngredient, addModelToDatabase, loadModel, addProduct } = itemModelSlice.actions

export default itemModelSlice.reducer
import { createSlice } from '@reduxjs/toolkit'





const initialState = {
    menuDoc:
    {
        data: null,
        isLoading: true,
    }
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    requestMenu: null,
    menuAvailable: false,
    reducers: {
        menuDocs: (state, action) => {
            state.menuDoc.data = action.payload;
            state.temp = state.menuDoc.data
            state.menuDoc.isLoading = false;
         },
        addItemModel: (state, action) => {

        },
        setRequestMenu: (state, action) =>{
            state.requestMenu = action.payload
        },
        reloadMenu: (state, action) =>{
            state.menuDoc.isLoading = true;
        }
        
    }
})

// Action creators are generated for each case reducer function
export const { addItemModel, setRequestMenu, menuDocs, reloadMenu } = menuSlice.actions

export default menuSlice.reducer
import { async } from '@firebase/util';
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
        // getData: (state, action) => {
        //     state.hotelItems = action.payload
        //     state.isLoading = false;
        // }
        // ,
        // menuDocs: (state, action) => {
        //    state.menuDoc.data = action.payload;
        //    state.menuDoc.isLoading = false;
        //    console.log(state.menuDoc.data);
        // },
        // requestMenu: (state, action) =>{

        // }
        menuDocs: (state, action) => {
            state.menuDoc.data = action.payload;
            state.temp = state.menuDoc.data
            state.menuDoc.isLoading = false;
         },
        addItemModel: (state, action) => {

        },
        checkMenuAvaible: (state, action) =>{
 
            
        },
        setRequestMenu: (state, action) =>{
            console.log(action.payload);
            state.requestMenu = action.payload
        }
        
    }
})

// Action creators are generated for each case reducer function
export const { addItemModel, checkMenuAvaible, setRequestMenu, menuDocs } = menuSlice.actions

export default menuSlice.reducer
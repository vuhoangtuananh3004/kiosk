import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import menuReducer from '../features/hotel/menuSlice'
import itemModelReducer from '../features/model/itemModelSlice'



export default configureStore({
    reducer: {
        menu: menuReducer,
        model: itemModelReducer
    },
    // middleware: getDefaultMiddleware =>
    //     getDefaultMiddleware({
    //         serializableCheck: false,
    //     }),

})
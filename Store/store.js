import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import menuReducer from '../features/hotel/menuSlice'



export default configureStore({
    reducer: {
        menu: menuReducer
    },
    // middleware: getDefaultMiddleware =>
    //     getDefaultMiddleware({
    //         serializableCheck: false,
    //     }),

})
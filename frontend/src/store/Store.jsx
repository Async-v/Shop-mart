import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers(Features)/UserSlice'
import productSlice from './reducers(Features)/ProductSlice'
import cartSlice from './reducers(Features)/CartSlice'


export const store = configureStore({
    reducer:{
        userReducer: userSlice,
        productReducer: productSlice,
        cartReducer: cartSlice,
    },
})
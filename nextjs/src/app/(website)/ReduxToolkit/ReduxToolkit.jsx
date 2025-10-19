import { configureStore } from '@reduxjs/toolkit'
import  loginSlice  from './LoginSlice'
import  cartSlice  from './CartSlice'

export const store = configureStore({
  reducer: {
    login : loginSlice ,
    cart : cartSlice 
  },
})


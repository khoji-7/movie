import { configureStore } from '@reduxjs/toolkit'
import movieoReducer from "./movieoSlice.js"

export const store = configureStore({
  reducer: {
    movieoData : movieoReducer
   },
})
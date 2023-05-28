import { mealsSlice } from './meals/mealsSlice'
import { basketSlice } from './basket/basketSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    [basketSlice.name]: basketSlice.reducer,
    [mealsSlice.name]: mealsSlice.reducer,
  },
})

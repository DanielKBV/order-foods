import { mealsSlice } from './meals/mealsSlice'
import { basketSlice } from './basket/basketSlice'
import { configureStore } from '@reduxjs/toolkit'
import { snackbarSlice } from './snackbar/snackbar'
import { authSlice } from './auth/authSlice'

export const store = configureStore({
  reducer: {
    [basketSlice.name]: basketSlice.reducer,
    [mealsSlice.name]: mealsSlice.reducer,
    [snackbarSlice.name]: snackbarSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
})

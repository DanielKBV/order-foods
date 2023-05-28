import { createSlice } from '@reduxjs/toolkit'
import { getMeals } from './mealsThunk'

const initialState = {
  meals: [],
  isLoading: false,
  isError: '',
}

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMeals.fulfilled, (state, action) => {
        state.meals = action.payload
        state.isLoading = false
      })
      .addCase(getMeals.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMeals.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.payload
      })
  },
})

export const ActionsTypeMeals = mealsSlice.actions

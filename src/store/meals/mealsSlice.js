import { createSlice } from '@reduxjs/toolkit'
import { getMeals } from './mealsThunk'
import {
  deleteAdminMeals,
  editAdminMeals,
  postAdminMeals,
} from '../adminMeals/adminMealsThunk'

const initialState = {
  meals: [],
  isLoading: false,
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
      .addCase(getMeals.rejected, (state) => {
        state.isLoading = false
      })

    builder
      .addCase(postAdminMeals.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(postAdminMeals.pending, (state) => {
        state.isLoading = true
      })
      .addCase(postAdminMeals.rejected, (state) => {
        state.isLoading = false
      })

    builder
      .addCase(editAdminMeals.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(editAdminMeals.pending, (state) => {
        state.isLoading = true
      })
      .addCase(editAdminMeals.rejected, (state) => {
        state.isLoading = false
      })

    builder
      .addCase(deleteAdminMeals.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(deleteAdminMeals.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteAdminMeals.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export const ActionsTypeMeals = mealsSlice.actions

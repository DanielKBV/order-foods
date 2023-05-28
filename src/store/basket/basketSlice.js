import { createSlice } from '@reduxjs/toolkit'
import { addItem, decrementFood, getBasket, incrementFood } from './basketThunk'

export const ActionTypeBasket = {
  NEW_MEALS: 'NEW_MEALS',
  GET_MEALS_PENDING: 'GET_MEALS_PENDING',
  GET_MEALS_SUCCESS: 'GET_MEALS_SUCCESS',
  ERROR_MEALS: 'ERROR_MEALS',
}

const initialState = {
  isLoading: false,
  items: [],
  isError: '',
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBasket.fulfilled, (state, action) => {
        state.items = action.payload
        state.isLoading = false
      })
      .addCase(getBasket.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBasket.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.payload
      })

    builder
      .addCase(addItem.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(addItem.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addItem.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.payload
      })

    builder
      .addCase(incrementFood.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(incrementFood.pending, (state) => {
        state.isLoading = true
      })
      .addCase(incrementFood.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.payload
      })

    builder
      .addCase(decrementFood.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(decrementFood.pending, (state) => {
        state.isLoading = true
      })
      .addCase(decrementFood.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.payload
      })
  },
})

export const ActionsType = basketSlice.actions

import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  deleteDecrementFoodRequest,
  getBasketRequest,
  incrementFoodRequest,
  putDecrementFoodRequest,
} from '../../api/basketService'
import { addItemRequest } from '../../api/mealsService'

export const getBasket = createAsyncThunk(
  'basket/getBasket ',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getBasketRequest()
      const { data } = response.data

      return data.items
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const addItem = createAsyncThunk(
  'basket/addItem ',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await addItemRequest(payload)
      const { data } = response.data

      dispatch(getBasket())

      return await data.items
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const incrementFood = createAsyncThunk(
  'basket/putIncrementFood',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await incrementFoodRequest(payload)

      dispatch(getBasket())

      return await response.items
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const decrementFood = createAsyncThunk(
  'basket/putDecrementFood',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      let response
      if (payload.amount !== 0) {
        response = await putDecrementFoodRequest(payload)
      } else {
        response = await deleteDecrementFoodRequest(payload)
      }

      const { data } = response.data

      console.log('response: ', data)

      dispatch(getBasket())

      return await data.items
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

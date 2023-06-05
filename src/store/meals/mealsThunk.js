import { createAsyncThunk } from '@reduxjs/toolkit'
import { getMealsRequest } from '../../api/mealsService'

export const getMeals = createAsyncThunk(
  'meals/getMeals',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getMealsRequest()
      const { data } = response.data

      return data
    } catch (error) {
      return rejectWithValue(error?.response.message || 'Something went wrong')
    }
  }
)

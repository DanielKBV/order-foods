import { createAsyncThunk } from '@reduxjs/toolkit'
import { getMeals } from '../meals/mealsThunk'
import {
  deleteAdminMealsRequest,
  postAddAdminMealsRequest,
  putEditAdminMealsRequest,
} from '../../api/mealsService'

export const postAdminMeals = createAsyncThunk(
  'meals/postAddAdminMeals',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await postAddAdminMealsRequest(payload)

      dispatch(getMeals())

      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const editAdminMeals = createAsyncThunk(
  'meals/editAdminMeals',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await putEditAdminMealsRequest(payload)

      dispatch(getMeals())

      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const deleteAdminMeals = createAsyncThunk(
  'meals/deleteAdminMeals',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await deleteAdminMealsRequest(payload)

      dispatch(getMeals())

      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

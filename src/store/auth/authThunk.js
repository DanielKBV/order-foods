import { createAsyncThunk } from '@reduxjs/toolkit'
import { postSignInRequest, postSignUpRequest } from '../../api/authService'
import { STORAGE_KEY } from '../../constants/constants'

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await postSignUpRequest(payload)

      localStorage.setItem(STORAGE_KEY.AUTH, JSON.stringify(data.data))

      return data.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await postSignInRequest(payload)

      localStorage.setItem(STORAGE_KEY.AUTH, JSON.stringify(data.data))

      return data.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

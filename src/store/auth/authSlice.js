import { createSlice } from '@reduxjs/toolkit'
import { signIn, signUp } from './authThunk'
import { STORAGE_KEY } from '../../constants/constants'

const getInitialState = () => {
  const json = localStorage.getItem(STORAGE_KEY.AUTH)

  if (json) {
    const userData = JSON.parse(json)
    return {
      isAuthorization: true,
      token: userData.token,

      user: {
        name: userData.user.name,
        email: userData.user.email,
        role: userData.user.role,
      },
    }
  }

  return {
    isAuthorization: false,
    token: '',

    user: {
      name: '',
      email: '',
      role: '',
    },

    isLoading: false,
    items: [],
  }
}

// const initialState = {
//   isAuthorization: false,
//   token: '',

//   user: {
//     name: '',
//     email: '',
//     password: '',
//     id: '',
//   },
// }

export const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialState,
  reducers: {
    logOut: (state) => {
      state.isAuthorization = false
      state.token = ''

      state.user = {
        name: '',
        email: '',
        password: '',
        id: '',
      }
      localStorage.removeItem(STORAGE_KEY.AUTH)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.isAuthorization = true
        state.token = action.token
        state.isLoading = false
      })
      .addCase(signUp.pending, (state) => {
        state.isLoading = true
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false
      })
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.isAuthorization = true
        state.token = action.payload.token
      })
      .addCase(signIn.pending, (state) => {
        state.isLoading = true
      })
      .addCase(signIn.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export const ActionTypeAuth = authSlice.actions

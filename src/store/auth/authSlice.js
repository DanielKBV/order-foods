import { createSlice } from '@reduxjs/toolkit'
import { signIn, signUp } from './authThunk'
import { STORAGE_KEY, USER_ROLE } from '../../constants/constants'

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
      role: USER_ROLE.GUEST,
    },

    isLoading: false,
    items: [],
  }
}

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
        role: USER_ROLE.GUEST,
        id: '',
      }

      localStorage.removeItem(STORAGE_KEY.AUTH)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        console.log('action: ', action)
        state.isAuthorization = true
        state.token = action.token

        state.user = {
          name: action.user.name,
          email: action.user.email,
          role: action.user.role,
        }

        state.isLoading = false
      })
      .addCase(signUp.pending, (state) => {
        state.isLoading = true
      })
      .addCase(signUp.rejected, (state) => {
        state.isLoading = false
      })
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.isAuthorization = true
        state.token = action.payload.token

        state.user = {
          name: action.payload.user.name,
          email: action.payload.user.email,
          role: action.payload.user.role,
        }
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

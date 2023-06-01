import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
  severity: '',
  message: '',
}

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    doSuccess(state) {
      state.severity = state.severity = 'success'
      state.message = state.message = 'Successfully'
      state.open = state.open = true
    },
    doError(state, action) {
      state.severity = state.severity = 'error'
      state.message = state.message = action.payload
      state.open = state.open = true
    },
    closeSnackbar(state) {
      state.open = false
    },
  },
})

export const ActionsTypeSnackbar = snackbarSlice.actions

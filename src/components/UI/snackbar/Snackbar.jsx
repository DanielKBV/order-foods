import { Alert, Snackbar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export const SnackbarMui = ({ onClose }) => {
  const { open, severity, message } = useSelector((state) => state.snackbar)

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={onClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={onClose} severity={severity} sx={{ width: '100% ' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}

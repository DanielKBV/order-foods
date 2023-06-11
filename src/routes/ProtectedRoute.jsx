import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({
  component: Comment,
  fallBacPath,
  isAllowed,
}) => {
  if (!isAllowed) {
    return <Navigate to={fallBacPath} />
  }

  return <Comment />
}

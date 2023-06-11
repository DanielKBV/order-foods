import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { UsersLayout } from '../layout/UsersLayout'
import { MealLayout } from '../layout/MealLayout'
import { AdminLayout } from '../layout/AdminLayout'
import { Meals } from '../layout/admin/Meals'
import { USER_ROLE } from '../constants/constants'
import { ProtectedRoute } from './ProtectedRoute'
import { useSelector } from 'react-redux'

export const MainRoutes = () => {
  const role = useSelector((state) => state.auth.user.role)

  const isAllowed = (roles) => {
    return roles.includes(role)
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute
              isAllowed={isAllowed([USER_ROLE.GUEST, USER_ROLE.USER])}
              fallBacPath="/admin"
              component={UsersLayout}
            />
          }
        >
          <Route
            index
            element={
              <ProtectedRoute
                isAllowed={isAllowed([USER_ROLE.GUEST, USER_ROLE.USER])}
                fallBacPath="/admin"
                component={MealLayout}
              />
            }
          />
          <Route
            path="signIn"
            element={
              <ProtectedRoute
                isAllowed={isAllowed([USER_ROLE.GUEST, USER_ROLE.USER])}
                fallBacPath={role === USER_ROLE.ADMIN ? '/admin' : '/'}
                component={SignIn}
              />
            }
          />
          <Route
            path="signUp"
            element={
              <ProtectedRoute
                isAllowed={isAllowed([USER_ROLE.GUEST, USER_ROLE.USER])}
                fallBacPath={role === USER_ROLE.ADMIN ? '/admin' : '/'}
                component={SignUp}
              />
            }
          />
        </Route>
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              isAllowed={isAllowed([USER_ROLE.ADMIN])}
              fallBacPath="/"
              component={AdminLayout}
            />
          }
        >
          <Route index element={<Meals />} />
        </Route>
      </Routes>
    </div>
  )
}

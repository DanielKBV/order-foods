import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from '../components/UI/button/Button'
import { ActionTypeAuth } from '../store/auth/authSlice'
import { useDispatch } from 'react-redux'
import { getMeals } from '../store/meals/mealsThunk'

export const AdminLayout = () => {
  const dispatch = useDispatch()

  const logOutHandler = () => {
    dispatch(ActionTypeAuth.logOut())
  }

  useEffect(() => {
    dispatch(getMeals())
  }, [dispatch])

  return (
    <div>
      <HeaderStyle>
        <Ul>
          <li>
            <h1>Meals</h1>
          </li>
          <li>
            <Button
              fontSize="1.2rem"
              bgColor="#5a1f08"
              padding="10px 20px"
              borderradius="6px"
              hvBgColor="#4d1601"
              onClick={logOutHandler}
            >
              Log Out
            </Button>
          </li>
        </Ul>
      </HeaderStyle>
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}

const HeaderStyle = styled('header')`
  position: fixed;
  width: 100%;
  height: 101px;
  background-color: #8a2b06;
  padding: 22px 120px;
  color: #ffffff;
  top: 0;
  z-index: 998;
`

const Ul = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;

  list-style: none;
  font-size: 1.4rem;
`

const Container = styled('div')`
  margin-top: 120px;
`

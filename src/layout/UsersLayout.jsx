import React, { useCallback, useState } from 'react'
import { Header } from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import { Basket } from '../components/basket/Basket'
import { styled } from '@mui/material'

export const UsersLayout = () => {
  const [toggle, setToggle] = useState(false)

  const toggleHandler = useCallback(() => {
    setToggle((prev) => !prev)
  }, [])

  return (
    <div>
      <Header toggleHandler={toggleHandler} />
      {toggle && <Basket toggleHandler={toggleHandler} toggle={toggle} />}
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}

const Container = styled('div')`
  margin-top: 101px;
`

import React from 'react'
import styled from 'styled-components'
import { OrderBasket } from './OrderBasket'

export const Header = () => {
  return (
    <HeaderStyle>
      <Container>
        <MealsText>React Meals</MealsText>
        <OrderBasket>Your Cart</OrderBasket>
      </Container>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
  position: fixed;
  width: 100%;
  height: 101px;
  background-color: #8a2b06;
  padding: 22px 120px;
  color: #ffffff;
  top: 0;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MealsText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
`

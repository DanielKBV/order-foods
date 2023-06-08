import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { OrderBasket } from './OrderBasket'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '.././UI/button/Button'
import { useNavigate } from 'react-router-dom'
import { ActionTypeAuth } from '../../store/auth/authSlice'

export const Header = ({ toggleHandler }) => {
  const dispatch = useDispatch()
  const [animationClass, setAnimationClass] = useState('')
  const navigate = useNavigate()
  const { items } = useSelector((state) => state.basket)
  const { isAuthorization } = useSelector((state) => state.auth)

  const plusAnimation = () => {
    setAnimationClass('bump')

    const animationTimePlus = setTimeout(() => {
      setAnimationClass('')
    }, 300)

    return () => {
      clearTimeout(animationTimePlus)
    }
  }

  useEffect(() => {
    plusAnimation()
  }, [items])

  const navigateToSignIn = () => {
    navigate('/signIn')
  }

  const logOutHandler = () => {
    dispatch(ActionTypeAuth.logOut())
  }

  const navigateToHome = () => {
    navigate('/')
  }

  return (
    <HeaderStyle>
      <Container>
        <MealsText onClick={navigateToHome}>React Meals</MealsText>

        <ContainerButton>
          <OrderBasket className={animationClass} toggleHandler={toggleHandler}>
            Your Cart
          </OrderBasket>
          {!isAuthorization ? (
            <Button
              fontSize="1.2rem"
              bgColor="#5a1f08"
              padding="20px 20px"
              borderradius="6px"
              hvBgColor="#4d1601"
              onClick={navigateToSignIn}
            >
              Sign In
            </Button>
          ) : (
            <Button
              fontSize="1.2rem"
              bgColor="#5a1f08"
              padding="20px 20px"
              borderradius="6px"
              hvBgColor="#4d1601"
              onClick={logOutHandler}
            >
              Log Out
            </Button>
          )}
        </ContainerButton>
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
  z-index: 998;

  .bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
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

  cursor: pointer;
`

const ContainerButton = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`

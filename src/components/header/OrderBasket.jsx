import React, { useEffect } from 'react'
import { ReactComponent as BasketIcon } from '../../assets/icons/Group.svg'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getBasket } from '../../store/basket/basketThunk'

export const OrderBasket = ({ children, toggleHandler, className }) => {
  const { items } = useSelector((state) => state.basket)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBasket())
  }, [dispatch])

  const totalAmount = items?.reduce((prev, current) => prev + current.amount, 0)

  return (
    <Button onClick={toggleHandler} className={className}>
      <BasketIcon /> <OrderBasketTitle>{children}</OrderBasketTitle>
      <OrderBasketCount>{totalAmount}</OrderBasketCount>
    </Button>
  )
}

const Button = styled.button`
  padding: 16px 38px;
  background-color: #5a1f08;
  border-radius: 30px;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;

  :hover {
    background-color: #4d1601;
  }

  :active {
    background-color: #993108;
  }

  /* .bump {
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
  } */
`

const OrderBasketTitle = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-left: 13px;
`

const OrderBasketCount = styled.span`
  background-color: #8a2b06;
  border-radius: 30px;
  padding: 4px 20px;
  margin-left: 24px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
`

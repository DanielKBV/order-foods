import React, { useContext } from 'react'
import styled from 'styled-components'
import { ReactComponent as BasketMinus } from '../../assets/icons/minus.svg'
import { ReactComponent as BasketPlus } from '../../assets/icons/plus.svg'
import { cartContext } from '../../store/cartContext'

export const BasketItem = ({ title, price, amount, id }) => {
  const { incrementFoodHandler, decrementFoodHandler } = useContext(cartContext)

  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <PriceAndAmountContainer>
          <Price>${price}</Price>
          <Amount>x{amount}</Amount>
        </PriceAndAmountContainer>
        <CounterContainer>
          <ContainerStyleMinusBasket
            onClick={() => decrementFoodHandler(id, amount - 1)}
          >
            <BasketMinus />
          </ContainerStyleMinusBasket>

          <ContainerStylePlusBasket
            onClick={() => incrementFoodHandler(id, amount)}
          >
            <BasketPlus />
          </ContainerStylePlusBasket>
        </CounterContainer>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  padding: 24px 10px;
  width: 100%;
  border-bottom: 2px solid #d6d6d6;
`

const Title = styled.p`
  display: flex;
  align-self: flex-start;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #222222;
  margin: 0 0 12px 0;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PriceAndAmountContainer = styled.div`
  display: flex;
  align-items: center;
  width: 155px;
  justify-content: space-between;
`

const Price = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ad5502;
  margin: 0;
`

const Amount = styled.span`
  box-sizing: border-box;
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  padding: 6px 14px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  display: block;
`

const CounterContainer = styled.div`
  display: flex;
  gap: 14px;
`

const ContainerStyleMinusBasket = styled.button`
  box-sizing: border-box;
  border: 1px solid #8a2b06;
  background-color: #fff;
  border-radius: 6px;
  width: 48px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #8a2b06;
  }

  :hover svg {
    path {
      stroke: #fff;
    }
  }

  :active {
    background-color: #993108;
  }
`

const ContainerStylePlusBasket = styled.button`
  box-sizing: border-box;
  border: 1px solid #8a2b06;
  background-color: #fff;
  border-radius: 6px;
  width: 48px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #8a2b06;
  }

  :hover svg {
    path {
      stroke: #fff;
    }
  }

  :active {
    background-color: #993108;
  }
`

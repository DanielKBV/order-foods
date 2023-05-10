import React, { useCallback, useContext } from 'react'
import styled from 'styled-components'
import { MealsItemForm } from './MealsItemForm'
import { cartContext } from '../../store/cartContext'

export const MealItem = ({ meal }) => {
  const { addItem } = useContext(cartContext)

  const addBasket = useCallback(
    (amount) => {
      addItem(meal._id, amount)
    },
    [addItem, meal._id]
  )

  return (
    <StyledItem>
      <StyledItemInfo>
        <StyledTitle>{meal.title}</StyledTitle>
        <DescriptionStyles>{meal.description}</DescriptionStyles>
        <span>{meal.price} $</span>
      </StyledItemInfo>
      <div>
        <MealsItemForm id={meal._id} price={meal.price} onAdd={addBasket} />
      </div>
    </StyledItem>
  )
}

const StyledItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  margin-bottom: 20px;

  :last-child {
    border: none;
    margin-bottom: -10px;
  }
`

const StyledItemInfo = styled.div`
  margin-bottom: 20px;

  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #ad5502;
    margin-top: 4px;
  }
`

const DescriptionStyles = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
`

const StyledTitle = styled.h4`
  font-weight: 600;
  font-size: 18px;
  color: #222222;
`

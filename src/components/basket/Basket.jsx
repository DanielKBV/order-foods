import React, { useContext } from 'react'
import { Modal } from '../UI/modal/Modal'
import styled from 'styled-components'
import { BasketItem } from './BasketItem'
import { TotalAmount } from './TotalAmount'
import { cartContext } from '../../store/cartContext'

export const Basket = ({ toggleHandler }) => {
  const { items, totalPrice } = useContext(cartContext)

  return (
    <Modal onClick={toggleHandler}>
      <Content>
        {items.length ? (
          <FixedWidthContainer>
            {items.map((item) => {
              return (
                item.amount > 0 && (
                  <BasketItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    fixPrice={item.fixPrice}
                    amount={item.amount}
                  />
                )
              )
            })}
          </FixedWidthContainer>
        ) : null}
        <TotalAmount toggleHandler={toggleHandler} totalPrice={totalPrice} />
      </Content>
    </Modal>
  )
}

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
`

const FixedWidthContainer = styled.div`
  overflow-y: auto;
  max-height: 260px;
`

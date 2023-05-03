import React from 'react'
import { Modal } from '../UI/modal/Modal'
import styled from 'styled-components'
import { BasketItem } from './BasketItem'
import { TotalAmount } from './TotalAmount'

const items = [
  {
    id: '1',
    title: 'Sushi',
    description: 'Finest fish and veggies',
    price: '22.99',
    amount: '1',
  },
  {
    id: '2',
    title: 'Schnitzel',
    description: 'A german specialty!',
    price: '16.00',
    amount: '1',
  },
  {
    id: '3',
    title: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: '12.99',
    amount: '1',
  },
  {
    id: '4',
    title: 'Green Bowl',
    description: 'Healthy...and green...',
    price: '19.99',
    amount: '1',
  },
]

export const Basket = () => {
  return (
    <Modal>
      <Content>
        {items.length ? (
          <FixedWidthContainer>
            {items.map((item) => (
              <BasketItem
                key={item.id}
                title={item.title}
                price={item.price}
                amount={item.amount}
              />
            ))}
          </FixedWidthContainer>
        ) : null}
        <TotalAmount />
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
  max-height: 228px;
`

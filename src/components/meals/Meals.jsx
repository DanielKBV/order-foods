import React from 'react'
import styled from 'styled-components'
import { Card } from '../UI/card/Card'
import { MealItem } from './MealItem'

const arr = [
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

export const Meals = () => {
  return (
    <Container>
      <Card>
        {arr.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </Card>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 135px;
  margin-bottom: 100px;
`

import React from 'react'
import styled from 'styled-components'
import { Card } from '../UI/card/Card'
import { MealItem } from './MealItem'
import { meals } from '../../utils/constants'

export const Meals = () => {
  return (
    <Container>
      <Card>
        {meals.map((meal) => (
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

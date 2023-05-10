import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Card } from '../UI/card/Card'
import { MealItem } from './MealItem'
import { fetchRequest } from '../../lib/fetchAPI'

export const Meals = () => {
  const [meals, setMeals] = useState()

  const getFoods = async () => {
    try {
      const response = await fetchRequest('/foods')
      setMeals(response)
    } catch (error) {
      new Error(error)
    }
  }

  useEffect(() => {
    getFoods()
  }, [])

  return (
    <Container>
      <Card>
        {meals?.map((meal) => (
          <MealItem key={meal._id} meal={meal} />
        ))}
      </Card>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 135px;
  margin-bottom: 100px;
`

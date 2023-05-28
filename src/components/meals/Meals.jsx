import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Card } from '../UI/card/Card'
import { MealItem } from './MealItem'
import { useDispatch, useSelector } from 'react-redux'
import { Loading } from '../UI/loading/Loading'
import { getMeals } from '../../store/meals/mealsThunk'

export const Meals = () => {
  const { meals, isLoading, isError } = useSelector((state) => state.meals)
  console.log('isError: ', isError)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMeals())
  }, [dispatch])

  return (
    <>
      {isLoading && <Loading />}
      {isError && <h1 style={{ color: 'red' }}>Error</h1>}
      <Container>
        <Card>
          {meals?.map((meal) => (
            <MealItem key={meal._id} meal={meal} />
          ))}
        </Card>
      </Container>
    </>
  )
}

const Container = styled.div`
  margin-top: 135px;
  margin-bottom: 100px;
`

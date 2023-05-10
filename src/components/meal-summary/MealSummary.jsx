import React, { memo } from 'react'
import foodPhoto from '../../assets/images/foodPhoto.png'
import styled from 'styled-components'
import { MealSummaryCard } from './MealSummaryCard'

export const MealSummary = memo(() => {
  return (
    <Container>
      <img src={foodPhoto} alt="Food Photos" />
      <MealSummaryCard />
    </Container>
  )
})

const Container = styled.div`
  width: 100%;
  height: 432px;
  margin-top: 101px;

  img {
    width: 100%;
    height: 100%;
  }
`

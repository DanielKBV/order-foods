import React from 'react'
import styled from 'styled-components'

export const MealSummaryCard = () => {
  return (
    <Container>
      <Box>
        <h3>Delicious Food, Delivered To You</h3>
        <Text>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </Text>
        <Text>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by  experienced chefs!
        </Text>
      </Box>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -175px;
`

const Box = styled.div`
  background-color: #383838;
  box-shadow: 0px 6px 16px #0000004c;
  border-radius: 16px;
  text-align: center;
  color: #fff;
  padding: 36px 54px;

  h3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    margin-bottom: 26px;
  }
`

const Text = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  width: 746px;
  line-height: 24px;
  text-align: center;
  margin-top: 20px;
`

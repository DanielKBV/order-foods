import React from 'react'
import styled from 'styled-components'
import { Button } from '../UI/button/Button'

export const TotalAmount = ({ price }) => {
  return (
    <div>
      <InfoContainer>
        <Label>Total Amount</Label>
        <Prise>$ 20.00</Prise>
      </InfoContainer>
      <ActionButtonContainer>
        <Button
          bgColor="#fff"
          border="1px solid #8A2B06"
          color="#8A2B06"
          variants="outlined"
          fontWeight="600"
          fontSize="16px"
          padding="10px 32px"
          hvBgColor="#8A2B06"
          hvColor="#fff"
          acvBgColor="#993108"
          acvColor="#fff"
        >
          Close
        </Button>
      </ActionButtonContainer>
    </div>
  )
}

const Label = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
`

const Prise = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #8a2b06;
`

const InfoContainer = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
`

const ActionButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`

import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../UI/button/Button'
import { ReactComponent as MealPlus } from '../../assets/icons/plusAdd.svg'

export const MealsItemForm = ({ id, onAdd }) => {
  const [amount, setAmount] = useState(1)

  const changeHandler = (e) => {
    setAmount(e.target.value)
  }

  const addItemHandler = (event) => {
    event.preventDefault()
    onAdd(+amount)
  }

  return (
    <StyledForm>
      <InputContainer>
        <LabelStyles htmlFor={id}>Amount</LabelStyles>

        <Input
          type="number"
          value={amount}
          onChange={changeHandler}
          id={id}
          min={1}
        />
      </InputContainer>
      <Button
        fontWeight="700"
        fontSize="14px"
        dbBgColor="#c9390097"
        onClick={addItemHandler}
      >
        <StyledIcon /> Add
      </Button>
    </StyledForm>
  )
}

const Input = styled.input`
  box-sizing: border-box;
  width: 60px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding: 4px 11px 4px 12px;

  border: 1px solid #d6d6d6;
  outline: none;
  border-radius: 6px;
  width: 60px;
`

const StyledIcon = styled(MealPlus)`
  margin-right: 10px;
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`

const LabelStyles = styled.label`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  margin-right: 20px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

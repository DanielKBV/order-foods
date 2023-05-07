import styled from 'styled-components'

import React from 'react'

export const Button = (props) => {
  const {
    children,
    onClick,
    color = '#fff',
    bgColor = '#8A2B06',
    hvBgColor = '#7e2a0a',
    hvColor,
    acvBgColor = '#993108',
    border = 'none',
    acvColor,
    fontSize,
    fontWeight,
    padding = '10px 24px 10px 16px',
    dbBgColor,
    dbColor = '#fff',
    disabled,
  } = props

  return (
    <ButtonStyle
      color={color}
      backgroundColor={bgColor}
      hoverBackgroundColor={hvBgColor}
      hoverColor={hvColor}
      onClick={onClick}
      activeBackgroundColor={acvBgColor}
      activeColor={acvColor}
      border={border}
      fontSize={fontSize}
      fontWeight={fontWeight}
      padding={padding}
      disabledBackgroundColor={dbBgColor}
      disabledColor={dbColor}
      disabled={disabled}
    >
      {children}
    </ButtonStyle>
  )
}

const ButtonStyle = styled.button`
  box-sizing: border-box;
  font-family: 'Poppins';
  font-style: normal;
  padding: ${(props) => props.padding};

  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};

  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: 20px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  border: ${(props) => props.border};

  :hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverColor};
  }

  :active {
    background-color: ${(props) => props.activeBackgroundColor};
    color: ${(props) => props.activeColor};
  }

  :disabled {
    background-color: ${(props) => props.disabledBackgroundColor};
    color: ${(props) => props.disabledColor};
  }

  cursor: pointer;
`

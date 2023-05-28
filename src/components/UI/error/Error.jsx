import React from 'react'
import styled from 'styled-components'

export const Error = ({ children }) => {
  return (
    <Container>
      <p>{children}</p>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;

  p {
    font-size: 4rem;
    color: #ff0000;
  }
`

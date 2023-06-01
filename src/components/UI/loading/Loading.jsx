import React from 'react'
import styled from 'styled-components'

export const Loading = () => {
  return (
    <Container>
      <span className="loader"></span>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0%;
  padding: 20%;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 99009;
  background-color: rgba(0, 0, 0, 0.75);
`

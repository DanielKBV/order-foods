import React from 'react'
import styled from 'styled-components'
import { createPortal } from 'react-dom'

export const Modal = ({ children }) => {
  return createPortal(
    <ModalStyle>{children}</ModalStyle>,
    document.getElementById('modal')
  )
}

const ModalStyle = styled.div`
  position: fixed;
  top: 26%;
  left: 28%;
  width: 44%;
  background-color: #fff;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;

  animation: slide-down 300ms ease-out forwards;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

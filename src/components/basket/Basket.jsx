import React, { useEffect } from 'react'
import { Modal, Box } from '@mui/material'
import styled from 'styled-components'
import { BasketItem } from './BasketItem'
import { TotalAmount } from './TotalAmount'
import { useDispatch, useSelector } from 'react-redux'
import { getBasket } from '../../store/basket/basketThunk'
import { Loading } from '../UI/loading/Loading'

export const Basket = ({ toggleHandler, toggle }) => {
  const { items, isLoading } = useSelector((state) => state.basket)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBasket())
  }, [dispatch])

  const totalPrice = items?.reduce(
    (prev, current) => prev + +current.price.toFixed(2) * current.amount,
    0
  )

  return (
    <>
      {isLoading && <Loading />}
      <Modal onClose={toggleHandler} open={toggle}>
        <StyledModalContent>
          <Content>
            {items?.length ? (
              <FixedWidthContainer>
                {items.map((item) => {
                  return (
                    <BasketItem
                      key={item._id}
                      id={item._id}
                      title={item.title}
                      price={item.price}
                      amount={item.amount}
                    />
                  )
                })}
              </FixedWidthContainer>
            ) : null}
            <TotalAmount
              toggleHandler={toggleHandler}
              totalPrice={totalPrice}
            />
          </Content>
        </StyledModalContent>
      </Modal>
    </>
  )
}

const StyledModalContent = styled(Box)(() => ({
  '& ': {
    position: 'fixed',
    top: '30vh',
    left: '28%',
    width: '46%',
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '14px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
    border: 'none',

    animation: 'slide-down 300ms ease-out forwards',

    '@keyframes slide-down': {
      from: {
        opacity: '0',
        transform: 'translateY(-4rem)',
      },
      to: {
        opacity: '1',
        transform: 'translateY(0)',
      },
    },
  },
}))

// const ModalStyle = styled.div`
//   position: fixed;
//   top: 30vh;
//   left: calc(50% - 20rem);
//   width: 42rem;
//   background-color: white;
//   padding: 1rem;
//   border-radius: 14px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
//   animation: slide-down 300ms ease-out forwards;

//   z-index: 999;

//   @keyframes slide-down {
//     from {
//       opacity: 0;
//       transform: translateY(-4rem);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
// `

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
`

const FixedWidthContainer = styled.div`
  overflow-y: auto;
  max-height: 260px;
`

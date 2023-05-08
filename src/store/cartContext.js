import { createContext, useReducer } from 'react'
import { ActionType, cartReducer } from './cartReducer'

export const cartContext = createContext({
  items: [],
  totalAmount: 0,
})

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, [])

  const addItem = (data) => {
    dispatch({ type: ActionType.ADD_ITEM, payload: data })
  }

  const orderAmount = cartState.reduce(
    (prev, current) => prev + current.amount,
    0
  )

  const incrementFoodHandler = (id) => {
    dispatch({
      type: ActionType.INCREMENT,
      payload: id,
    })
  }

  const decrementFoodHandler = (id) => {
    dispatch({
      type: ActionType.DECREMENT,
      payload: id,
    })
  }

  const totalPrice = cartState.reduce(
    (prev, current) => prev + +current.price.toFixed(2) * current.amount,
    0
  )

  const cartValue = {
    items: cartState,
    addItem,
    totalAmount: orderAmount,
    incrementFoodHandler,
    decrementFoodHandler,
    totalPrice,
  }

  return (
    <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
  )
}

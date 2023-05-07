import { useState } from 'react'
import { Header } from './components/header/Header'
import { MealSummary } from './components/meal-summary/MealSummary'
import { Meals } from './components/meals/Meals'
import { Basket } from './components/basket/Basket'
import { CartProvider } from './store/cartContext'

const AppContent = () => {
  const [toggle, setToggle] = useState(false)

  const toggleHandler = () => {
    setToggle((prev) => !prev)
  }

  return (
    <>
      <Header toggleHandler={toggleHandler} />
      <MealSummary />
      <Meals />
      {toggle && <Basket toggleHandler={toggleHandler} />}
    </>
  )
}

const App = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}

export default App

/*

  const addItem = (data) => {
    // const isExist = cartState.find((item) => item.title === data.title)
    dispatch({ type: ActionType.IS_EXIST, payload: data })

    if (!cartState.items.length) {
      return dispatch({ type: ActionType.CART_LENGTH, payload: data })
    }

    // if (!isExist) {
    //   return setCartState([...cartState, data])
    // }

    // if (!cartState.isExist) {
    //   return dispatch({
    //     type: ActionType.EXIST_BOOLEAN,
    //     payload: { items: cartState.items, data: data },
    //   })
    // }
    // rrrrrrrrrrrrrrrrrrrr
    // if (!cartState.isExist) {
    dispatch({
      type: ActionType.EXIST_BOOLEAN,
      payload: { items: cartState.items, data: data },
    })
    // }

    // const updatedItem = cartState.items.map((item) => {
    //   if (item.title === data.title) {
    //     return {
    //       ...item,
    //       amount: item.amount + data.amount,
    //     }
    //   }
    //   return item
    // })

    dispatch({
      type: ActionType.UPDATED_ITEM,
      payload: { item: cartState.items, data: data },
    })

    // setCartState([...updatedItem])
    dispatch({
      type: ActionType.REST_UPDATED_ITEM,
      payload: [...cartState.items],
    })
  }

*/

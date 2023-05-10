import { createContext, useEffect, useReducer } from 'react'
import { fetchRequest } from '../lib/fetchAPI'
import { cartReducer } from './cartReducer'

export const cartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, [])
  console.log('cartState: ', cartState)

  const addItem = async (id, amount) => {
    try {
      const response = await fetchRequest(`/foods/${id}/addToBasket`, {
        method: 'POST',
        body: { amount: amount },
      })

      dispatch({ type: 'NEW_MEALS', payload: response.items })
    } catch (error) {
      new Error(error)
    }
  }

  const getBasket = async () => {
    try {
      const response = await fetchRequest('/basket')
      dispatch({ type: 'NEW_MEALS', payload: response.items })
    } catch (error) {
      new Error(error)
    }
  }

  const incrementFoodHandler = async (id, amount) => {
    try {
      const response = await fetchRequest(`/basketItem/${id}/update`, {
        method: 'PUT',
        body: { amount: amount + 1 },
      })
      dispatch({ type: 'NEW_MEALS', payload: response.items })

      getBasket()
    } catch (error) {
      new Error(error)
    }
  }

  const decrementFoodHandler = async (id, amount) => {
    if (amount !== 0) {
      try {
        const response = await fetchRequest(`/basketItem/${id}/update`, {
          method: 'PUT',
          body: { amount: amount },
        })
        dispatch({ type: 'NEW_MEALS', payload: response.items })

        getBasket()
      } catch (error) {
        new Error(error)
      }
    } else {
      try {
        const response = await fetchRequest(`/basketItem/${id}/delete`, {
          method: 'DELETE',
        })
        dispatch({ type: 'NEW_MEALS', payload: response.items })

        return getBasket()
      } catch (error) {
        new Error(error)
      }
      return getBasket()
    }
    return getBasket()
  }

  useEffect(() => {
    getBasket()
  }, [])

  const cartValue = {
    addItem,
    incrementFoodHandler,
    decrementFoodHandler,
    items: cartState,
    getBasket,
  }

  return (
    <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
  )
}

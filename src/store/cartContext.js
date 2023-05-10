import { createContext, useEffect, useState } from 'react'
import { fetchRequest } from '../lib/fetchAPI'

export const cartContext = createContext()

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])

  const addItem = async (id, amount) => {
    try {
      const response = await fetchRequest(`/foods/${id}/addToBasket`, {
        method: 'POST',
        body: { amount: amount },
      })

      setItems(response.items)
    } catch (error) {
      new Error(error)
    }
  }

  const getBasket = async () => {
    try {
      const response = await fetchRequest('/basket')
      setItems(response.items)
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

      setItems(response.items)

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
        setItems(response.items)
        getBasket()
      } catch (error) {
        new Error(error)
      }
    } else {
      try {
        const response = await fetchRequest(`/basketItem/${id}/delete`, {
          method: 'DELETE',
        })
        setItems(response.items)
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
    items,
    setItems,
    getBasket,
  }

  return (
    <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
  )
}

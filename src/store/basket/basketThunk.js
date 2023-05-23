import { fetchRequest } from '../../lib/fetchAPI'
import { ActionTypeBasket } from './basket'

export const getBasket = () => {
  return async (dispatch) => {
    try {
      const response = await fetchRequest('/basket')

      dispatch({ type: ActionTypeBasket.NEW_MEALS, payload: response.items })
    } catch (error) {
      new Error(error)
    }
  }
}

export const addItem = (id, amount) => {
  return async (dispatch) => {
    try {
      const response = await fetchRequest(`/foods/${id}/addToBasket`, {
        method: 'POST',
        body: { amount: amount },
      })

      dispatch(getBasket())

      return await response.items
    } catch (error) {
      new Error(error)
    }
  }
}

export const incrementFood = (id, amount) => {
  return async (dispatch) => {
    try {
      const response = await fetchRequest(`/basketItem/${id}/update`, {
        method: 'PUT',
        body: { amount: amount + 1 },
      })

      dispatch(getBasket())

      return await response.items
    } catch (error) {
      new Error(error)
    }
  }
}

export const decrementFood = (id, amount) => {
  return async (dispatch) => {
    if (amount !== 0) {
      try {
        const response = await fetchRequest(`/basketItem/${id}/update`, {
          method: 'PUT',
          body: { amount: amount },
        })

        dispatch(getBasket())

        return await response.items
      } catch (error) {
        new Error(error)
      }
    } else {
      try {
        const response = await fetchRequest(`/basketItem/${id}/delete`, {
          method: 'DELETE',
        })

        dispatch(getBasket())

        return await response.items
      } catch (error) {
        new Error(error)
      }
    }
  }
}

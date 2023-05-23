import { fetchRequest } from '../../lib/fetchAPI'
import { ActionTypeMeals } from './meals'

export const getFoods = () => {
  return async (dispatch) => {
    try {
      const response = await fetchRequest('/foods')

      dispatch({ type: ActionTypeMeals.MEALS, payload: response })
    } catch (error) {
      new Error(error)
    }
  }
}

import { axiosInstance } from '../config/axiosInstance'

export const getMealsRequest = () => {
  return axiosInstance.get('/foods')
}

export const addItemRequest = (data) => {
  const requestData = {
    amount: data.amount,
  }

  return axiosInstance.post(`/foods/${data.id}/addToBasket`, requestData)
}

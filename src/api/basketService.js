import { axiosInstance } from '../config/axiosInstance'

export const getBasketRequest = () => {
  return axiosInstance.get('/basket')
}

export const incrementFoodRequest = (data) => {
  const requestData = {
    amount: data.amount + 1,
  }

  return axiosInstance.put(`/basketItem/${data.id}/update`, requestData)
}

export const putDecrementFoodRequest = (data) => {
  const requestData = {
    amount: data.amount,
  }

  return axiosInstance.put(`/basketItem/${data.id}/update`, requestData)
}

export const deleteDecrementFoodRequest = (data) => {
  return axiosInstance.delete(`/basketItem/${data.id}/delete`)
}

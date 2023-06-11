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

export const postAddAdminMealsRequest = (data) => {
  return axiosInstance.post('/foods', data)
}

export const deleteAdminMealsRequest = (id) => {
  return axiosInstance.delete(`/foods/${id}`)
}

export const putEditAdminMealsRequest = (data) => {
  const newEditData = {
    price: data.price,
    title: data.title,
    description: data.description,
  }

  return axiosInstance.put(`/foods/${data.id}`, newEditData)
}

export const getMealById = (id) => {
  return axiosInstance.get(`/foods/${id}`)
}

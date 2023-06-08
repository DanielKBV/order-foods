import { axiosInstance } from '../config/axiosInstance'

export const postSignInRequest = (data) => {
  return axiosInstance.post('/auth/login', data)
}

export const postSignUpRequest = (payload) => {
  return axiosInstance.post('/auth/register', payload)
}

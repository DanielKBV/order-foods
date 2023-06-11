import axios from 'axios'
import { store } from '../store'
import { ActionTypeAuth } from '../store/auth/authSlice'

// const getUserAuthLoginDataFromStorage = () => {
//   const data = localStorage.getItem(STORAGE_KEY.AUTH)

//   if (data) {
//     const userData = JSON.parse(data)

//     return userData.token
//   }
// }
// Authorization: getUserAuthLoginDataFromStorage() || '',

const BASE_URL =
  'http://ec2-18-197-107-37.eu-central-1.compute.amazonaws.com:5500/api/v1'

const headers = {
  'Content-Type': 'application/json',
  UserID: 'KBV',
}

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: headers,
})

axiosInstance.interceptors.request.use(
  function (config) {
    const newConfig = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: store.getState().auth.token,
      },
    }
    return newConfig
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  function responses(response) {
    return response
  },
  function cathError(error) {
    if (error.response.status === 401) {
      store.dispatch(ActionTypeAuth.logOut())
    }
    return error
  }
)

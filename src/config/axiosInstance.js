import axios from 'axios'

const BASE_URL =
  'http://ec2-18-197-107-37.eu-central-1.compute.amazonaws.com:5500/api/v1'

const headers = {
  'Content-Type': 'application/json',
  UserID: 'DanielKBV',
  // UserID: 'zh',
}

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: headers,
})

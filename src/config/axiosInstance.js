import axios from 'axios'

const BASE_URL =
  'http://ec2-3-70-250-130.eu-central-1.compute.amazonaws.com:5500/api/v1'

const headers = {
  'Content-Type': 'application/json',
  UserID: 'DanielKBV',
}

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
	headers: headers,
})

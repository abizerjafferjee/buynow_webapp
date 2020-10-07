import axios from 'axios'

// export const serverUrl = 'http://localhost:8000'
export const serverUrl = 'https://api.odiance.com'

export const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: serverUrl
})
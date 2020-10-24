import axios from 'axios'

function getServerUrl() {
    var url = process.env.REACT_APP_API_DEV
    if (process.env.REACT_APP_ENVIRONMENT === 'UAT') {
        url = process.env.REACT_APP_API_UAT
    } else if (process.env.REACT_APP_ENVIRONMENT === 'PROD') {
        url = process.env.REACT_APP_API_PROD
    }
    return url
}

export const serverUrl = getServerUrl()

export const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: serverUrl
})

export async function sendLogs(message, endpoint) {
    axiosInstance.post(`api/logs/cloudwatch/`, {
        'app': 'viewer',
        'message': message,
        'endpoint': endpoint
    })
}
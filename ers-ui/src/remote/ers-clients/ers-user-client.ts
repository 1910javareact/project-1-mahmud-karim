import axios from 'axios'

export const ersUserClient = axios.create({
    baseURL: 'http://54.196.8.248:9002',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})
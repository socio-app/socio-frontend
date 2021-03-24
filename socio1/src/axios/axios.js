import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://192.168.1.6:3001',
  baseURL: 'https://d4320de1a849.ngrok.io',
})

export default instance

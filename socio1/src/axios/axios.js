import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://192.168.1.6:3001',
  baseURL: 'https://6f1507b2fe64.ngrok.io',
})

export default instance

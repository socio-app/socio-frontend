import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://216ef97f1b7c.ngrok.io',
})

export default instance

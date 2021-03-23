import axios from "axios";

const instance = axios.create({
  // baseURL: 'http://192.168.1.6:3001',
  baseURL: "https://132c0280f5ad.ngrok.io",
});

export default instance;

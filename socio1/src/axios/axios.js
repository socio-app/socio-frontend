import axios from "axios";

const instance = axios.create({
  // baseURL: 'http://192.168.1.6:3001',
  baseURL: "https://31d43f18ae5c.ngrok.io",
});

export default instance;

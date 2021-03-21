import axios from "axios";

const instance = axios.create({
  baseURL: "https://3e338239dd13.ngrok.io ",
});

export default instance;

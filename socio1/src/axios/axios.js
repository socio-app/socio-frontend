import axios from "axios";

const instance = axios.create({
  baseURL: "https://df83225d625a.ngrok.io",
});

export default instance;

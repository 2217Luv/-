import axios from "axios"
import urls from "./url.js"
const instance = axios.create({
  baseURL: urls.BASE_URL,
  timeout: 5000,
});
export default instance;
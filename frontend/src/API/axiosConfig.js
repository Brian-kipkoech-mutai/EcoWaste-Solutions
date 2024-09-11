import axios from "axios";

const baseURL = "http://localhost:5001/api";

const axiosInstance= axios.create({
  baseURL,
  timeout: 1000,
  withCredentials: true,
});

 export default axiosInstance;


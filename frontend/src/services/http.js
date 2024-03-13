import axios from 'axios';
const baseURL = process.env.URL_API;

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-type': 'application/json'
  }
});

export default axiosInstance;

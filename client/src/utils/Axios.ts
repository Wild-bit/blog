import axios from "axios";

const baseURL = "http://localhost:3000/api";

// 请求设置
const request = axios.create({
  baseURL: baseURL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
request.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (err) => {
    // Do something with request error
    return Promise.reject(err.data.error.message);
  }
);

request.interceptors.response.use(
  (res) => {
    // Do something with response data
    return res;
  },
  (err) => {
    // Do something with response error
    return Promise.reject(err);
  }
);

export default request;

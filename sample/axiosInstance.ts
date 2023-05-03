// axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000, // 5 seconds
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers that you need here
  },
});

// Add wrapper functions for HTTP methods
const get = (url: string, config?: any) => {
  return axiosInstance.get(url, config);
};

const post = (url: string, data: any, config?: any) => {
  return axiosInstance.post(url, data, config);
};

const put = (url: string, data: any, config?: any) => {
  return axiosInstance.put(url, data, config);
};

const del = (url: string, config?: any) => {
  return axiosInstance.delete(url, config);
};

export { get, post, put, del };


// MethodFullName for above methods are
// "axios:axios:create:<returnValue>:get",
// "axios:axios:create:<returnValue>:post",
// "axios:axios:create:<returnValue>:put",
// "axios:axios:create:<returnValue>:delete"

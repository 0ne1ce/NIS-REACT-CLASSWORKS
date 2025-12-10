import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = 'Bearer demo-token'; // Mock token
    
    console.log('Request Interceptor:', {
      url: config.url,
      method: config.method,
      headers: config.headers,
    });
    
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response Interceptor:', {
      status: response.status,
      url: response.config.url,
      dataLength: Array.isArray(response.data) ? response.data.length : 1,
    });
    return response;
  },
  (error) => {
    if (axios.isCancel(error)) {
      console.log('Request cancelled:', error.message);
    } else {
      console.error('Response Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export { axios };



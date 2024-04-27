import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sp-taskify-api.vercel.app/4-8',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  // withCredentials: true,
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token');
  if (config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

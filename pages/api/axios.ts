import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sp-taskify-api.vercel.app/4-8',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

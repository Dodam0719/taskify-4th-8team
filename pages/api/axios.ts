import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzEyNSwidGVhbUlkIjoiNC04IiwiaWF0IjoxNzE0MDM2MDMxLCJpc3MiOiJzcC10YXNraWZ5In0.U-iHdD_4bfOXm_n3T_d1oK7WhRpX9axIk2ynRIdEylA';

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
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;

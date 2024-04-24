import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzEyMSwidGVhbUlkIjoiNC04IiwiaWF0IjoxNzEzOTQzNDM4LCJpc3MiOiJzcC10YXNraWZ5In0.qkr5RhwVSQQXc6MpnrutytxabQ3oNvSVcJXK0-vqu8s';

const api = axios.create({
  baseURL: 'https://sp-taskify-api.vercel.app/4-8',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
  // withCredentials: true,
});

export default api;

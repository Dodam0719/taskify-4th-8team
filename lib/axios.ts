import axios from 'axios';

const client = axios.create({
  baseURL: 'https://sp-taskify-api.vercel.app/4-8/',
});

export default client;

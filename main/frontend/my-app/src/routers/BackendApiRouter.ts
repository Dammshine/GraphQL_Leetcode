import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'; // Use env variable

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API Wrapper to handle requests
export const apiRouter = {
  getUser: (id: string) : unknown => api.get(`/users/${id}`).then((res) => res.data as string),
};

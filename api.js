import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getPessoas = async () => {
  const response = await api.get('/pessoas');
  return response.data;
};

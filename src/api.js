import axios from 'axios';

const api = axios.create({
  baseURL: 'http://akemihouse-backend.test/api', // URL de la API de Laravel
});

export default api;

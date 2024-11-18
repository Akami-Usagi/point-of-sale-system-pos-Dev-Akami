import axios from 'axios';

const api = axios.create({
  baseURL: 'http://point-of-sale.test/api', // URL de la API de Laravel
});

export default api;

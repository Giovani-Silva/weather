import axios from 'axios';

export const APPID = '420184b6235f5f9cb1ba8921a68a96fe';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export default api;

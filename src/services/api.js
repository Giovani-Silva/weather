import axios from 'axios';

const APPID = 'APP ID do openweather.org';

const api = axios.create({
  baseURL: `api.openweathermap.org/data/2.5/?appid=${APPID}`,
});

export default api;

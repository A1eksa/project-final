const BASE_URL = 'https://aleksa-jessi-final-project.herokuapp.com';
//const BASE_URL = 'http://localhost:8080';

export const API_URL = (slug) => `${BASE_URL}/${slug}`;

export const API_KEY = '001b9a2c0b98871cba84969d778c61dd';

export const API_FIXED = `https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=${API_KEY}`;

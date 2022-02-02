const BASE_URL = 'http://localhost:8080';

export const API_URL = (slug) => `${BASE_URL}/${slug}`;

// const api={
//     key="d826cfe6494cd7661446dfc48ecef99b",
//     base="https://api.openweathermap.org/data/2.5/"
// }

export const api = 'https://api.openweathermap.org/data/2.5/';

export const API_KEY = 'd826cfe6494cd7661446dfc48ecef99b';

export const API_FIXED = `https://api.openweathermap.org/data/2.5/onecall?lat=59.32&lon=18.06&exclude=part&appid=${API_KEY}`;

// https://api.openweathermap.org/data/2.5/onecall?lat=59.32&lon=18.06&exclude=part&appid=d826cfe6494cd7661446dfc48ecef99b

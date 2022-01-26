import React, { useState } from 'react';
import './Weather.css';
import { api, api_key } from '../../utils/constants';

export const Weather = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === 'Enter') {
      fetch(`${api}weather?q=${query}&units=metric&APPID=${api_key}`)
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
          setQuery('');
          console.log(data);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}${date}${month}${year}`;
  };
  return (
    <div className='weather'>
      <main>
        <div className='search-box'>
          <input
            type='text'
            className='search-bar'
            placeholder='Search...'
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <div className='location-box'>
          <div className='location'>{weather.name}</div>
          {/* <div className='location-country'>{weather.sys.country}</div> */}
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>
        <div className='weather-box'>
          <div className='temp'>{weather.base}</div>
        </div>
        <div className='weather'>sunny</div>
      </main>
    </div>
  );
};

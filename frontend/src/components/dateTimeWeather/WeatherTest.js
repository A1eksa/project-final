import React, { useState, useEffect } from 'react';

import { API_KEY } from '../../utils/constants';
import { API_FIXED } from '../../utils/constants';

export const WeatherTest = () => {
  const [weather, setWeather] = useState([]);

  //   useEffect(() => {
  //     fetch(API_FIXED)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setWeather(data.response);
  //         console.log(data);
  //       });
  //   }, []);

  //   fetch(API_FIXED)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       //   setWeather(data);
  //       console.log(data);
  //     });

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

  //   return (
  //     <div className='weather'>
  //       <main>
  //         <div className='location-box'>
  //           {/* <div className='location'>{weather.name}</div> */}
  //           {/* <div className='location-country'>{weather.sys.country}</div> */}
  //           <div className='date'>{dateBuilder(new Date())}</div>
  //         </div>
  //         <div className='weather-box'>
  //           {/* <div className='temp'>{current.temp}</div> */}
  //         </div>
  //         <div className='weather'>{weather.description}</div>
  //       </main>
  //     </div>
  //   );
};

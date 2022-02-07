import React, { useState, useEffect } from 'react';

import { API_KEY } from '../../utils/constants';
import { API_FIXED } from '../../utils/constants';
import { IconContext, IconBase, FaAirbnb } from 'react-icons';
import { WiDayCloudyHigh, WiHorizonAlt } from 'react-icons/wi';
import { RiMoonClearLine }from 'react-icons/ri'

import {
  WeatherWrapper,
  DateNumber,
  DateWrapper,
  DayMonth,
  Day,
  City,
  Temp,
  Desc,
  Month,
  TempAndWeather,
} from './_DateTimeWeatherStyles';
import { TimeTicker } from '../small components/TimeTicker';

export const WeatherTest = () => {
  const [weather, setWeather] = useState({});

  // {
  //   cloudy && <Iconname />;
  // }
  // {
  //   sunny && <Iconsunny />;
  // }

  useEffect(() => {
    fetch(API_FIXED)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
        console.log(weather);
        console.log(result.weather[0].description);
      });
  }, []);

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
    // let year = d.getFullYear();

    return (
      <DateWrapper>
        <DateNumber>{date}</DateNumber>
        <DayMonth>
          <Day>{day}</Day>
          <Month>{month}</Month>
          <City>
              {weather.name}, {weather.sys.country}
            </City>
        </DayMonth>

      </DateWrapper>
    );
  };

  return (
    <div
      className={
        typeof weather.main != 'undefined' ? (
          weather.main.temp > 20 ? (
            <WiDayCloudyHigh />
          ) : (
            <WiHorizonAlt />
          )
        ) : (
          <WiHorizonAlt />
        )
      }
    >
      <WeatherWrapper>
        {typeof weather.main != 'undefined' ? (
          <div>
            <div className='date'>{dateBuilder(new Date())}</div>
            {/* <div>`${day}`</div> */}
            <TempAndWeather>
            <IconContext.Provider
                    value={{
                      color: 'var(--grey-200)',
                      fontWeight: 'thin',
                      className: 'global-class-name',
                      size: '4rem',
                      style: { verticalAlign: 'middle', marginRight: '1rem' },
                    }}
                  >
                <RiMoonClearLine />
              </IconContext.Provider>
              <Desc className='weather'>{weather.weather[0].description}, </Desc>
              <Temp className='weather'>{weather.main.temp}°c </Temp>
            </TempAndWeather>
          </div>
        ) : (
          ''
        )}
      </WeatherWrapper>
      {/* <TimeTicker /> */}
    </div>
  );
};

// return (
//   <>
//     <WeatherWrapper>
//       {typeof weather.main != 'undefined' ? (
//         <div>
//           <div>
//             {weather.name}, {weather.sys.country}{' '}
//           </div>
//           <div className='date'>{dateBuilder(new Date())}</div>
//           {/* <div>`${day}`</div> */}
//           <div className='weather'>{weather.main.temp}°C </div>
//           <div className='weather'>{weather.weather[0].description}</div>
//         </div>
//       ) : (
//         ''
//       )}
//     </WeatherWrapper>
//   </>
// );

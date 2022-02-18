import React, { useState, useEffect } from 'react';

import { API_FIXED } from '../../utils/constants';
import { IconContext } from 'react-icons';
import { WiDayCloudyHigh, WiHorizonAlt } from 'react-icons/wi';
import { RiMoonClearLine } from 'react-icons/ri';


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
  DescTemp
} from './_DateTimeWeatherStyles';

export const Weather = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(API_FIXED)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
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
            <TempAndWeather>
              <IconContext.Provider
                value={{
                  color: 'var(--grey-200)',
                  fontWeight: 'thin',
                  className: 'global-class-name',
                  size: '64px',
                  style: { verticalAlign: 'middle', marginRight: '1rem' },
                }}
              >
              <RiMoonClearLine />
              </IconContext.Provider>
              <DescTemp>
                <Desc className='weather'>
                  {weather.weather[0].description},{' '}
                </Desc>
                <Temp className='weather'>{weather.main.temp}°c </Temp>
              </DescTemp>
            </TempAndWeather>
          </div>
        ) : (
          ''
        )}
      </WeatherWrapper>
    </div>
  );
};

import React, { useState, useEffect } from 'react';

import { API_KEY } from '../../utils/constants';
import { API_FIXED } from '../../utils/constants';
import { IconContext, IconBase, FaAirbnb } from 'react-icons';
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
  Icon,
} from './_DateTimeWeatherStyles';

export const WeatherTest = () => {
  const [weather, setWeather] = useState({});
  // const [icon, setIcon] = useState({});

  useEffect(() => {
    fetch(API_FIXED)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        // const iconId = result.weather[0].icon;
        // console.log('iconId', iconId);
        console.log(result);
        console.log('icon', result.weather[0].icon);
      });
  }, []);

  // console.log('description', weather.weather[0].description);

  // const iconUrl = `http://openweathermap.org/img/wn/${iconId}`;
  // const iconId = weather.weather[0].icon;

  // const iconToday = iconUrl + ;

  // const iconLibrary = {
  //   '01d': 'url(https://openweathermap.org/img/wn/01d@2x.png)',
  //   '01n': 'url(https://openweathermap.org/img/wn/01n@2x.png)',
  //   '02d': 'url(https://openweathermap.org/img/wn/02d@2x.png)',
  //   '02n': 'url(https://openweathermap.org/img/wn/02n@2x.png)',
  //   '03d': 'url(https://openweathermap.org/img/wn/03d@2x.png)',
  //   '03n': 'url(https://openweathermap.org/img/wn/03n@2x.png)',
  //   '04d': 'url(https://openweathermap.org/img/wn/04d@2x.png)',
  //   '04n': 'url(https://openweathermap.org/img/wn/04n@2x.png)',
  //   '09d': 'url(https://openweathermap.org/img/wn/09d@2x.png)',
  //   '09n': 'url(https://openweathermap.org/img/wn/9n@2x.png)',
  //   '10d': 'url(https://openweathermap.org/img/wn/10d@2x.png)',
  //   '10n': 'url(https://openweathermap.org/img/wn/10n@2x.png)',
  //   '11d': 'url(https://openweathermap.org/img/wn/11d@2x.png)',
  //   '11n': 'url(https://openweathermap.org/img/wn/11n@2x.png)',
  //   '13d': 'url(https://openweathermap.org/img/wn/13d@2x.png)',
  //   '13n': 'url(https://openweathermap.org/img/wn/13n@2x.png)',
  //   '50d': 'url(https://openweathermap.org/img/wn/50d@2x.png)',
  //   '50n': 'url(https://openweathermap.org/img/wn/50n@2x.png)',
  // };

  // <BackgroundImg style={{ backgroundImage: imgLibrary[coordinates], }}></BackgroundImg>

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
    // let year = d.getFullYear()

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
                  size: '4rem',
                  style: { verticalAlign: 'middle', marginRight: '1rem' },
                }}
              >
                <RiMoonClearLine />
              </IconContext.Provider>
              <Desc className='weather'>
                {weather.weather[0].description},{' '}
              </Desc>
              {/* <Icon>{iconLibrary}</Icon> */}
              {/* <img src={`http://openweathermap.org/img/wn/${iconId}.png`}></img> */}
              {/* <img src='http://openweathermap.org/img/wn/01d.png'></img> */}
              <Temp className='weather'>{weather.main.temp}°c </Temp>
            </TempAndWeather>
          </div>
        ) : (
          ''
        )}
      </WeatherWrapper>
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

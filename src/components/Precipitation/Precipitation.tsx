import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import weatherCloud from '../../assets/icons/ic-weather-cloud.svg';
import weatherCloudy from '../../assets/icons/ic-weather-cloudy.svg';
import weatherDrop from '../../assets/icons/ic-weather-drop.svg';
import weatherMoon from '../../assets/icons/ic-weather-moon.svg';
import weatherSnow from '../../assets/icons/ic-weather-snow.svg';
import weatherSunny from '../../assets/icons/ic-weather-sunny.svg';
import weatherUmbrella from '../../assets/icons/ic-weather-umbrella.svg';
import weatherWind from '../../assets/icons/ic-weather-wind.svg';
import weatherWindStorm from '../../assets/icons/ic-weather-wind-storm.svg';
import weatherWindStormRain from '../../assets/icons/ic-weather-wind-storm-rain.svg';
import {getLocalDate} from '../../utils';
import {IPrecipitationProps} from '../../common/types';

export function Precipitation({weather, size}: IPrecipitationProps): JSX.Element {
  const isLoading = useSelector((state: RootState) => state.inputReducer.loading);
  if (isLoading) {
    return <div />;
  }
  const date = getLocalDate(weather.timezone || 0, new Date());
  const precipitationId = weather.weather[0].id;

  function setIcon(id: number) {
    switch (true) {
      case id >= 200 && id < 300:
        if (id < 210 && id >= 230) {
          return weatherWindStormRain;
        }
        return weatherWindStorm;

      case id >= 300 && id < 400:
        if (id >= 310) return weatherDrop;
        return weatherUmbrella;

      case id >= 500 && id < 600:
        if (id === 511) return weatherSnow;
        return weatherDrop;
      case id >= 600 && id < 700:
        return weatherSnow;
      case id >= 700 && id < 800:
        return weatherWind;

      case id === 800:
        if (date.getHours() <= 6 || date.getHours() >= 18) {
          return weatherMoon;
        }
        return weatherSunny;
      case id > 800:
        if (id >= 803) return weatherCloud;
        return weatherCloudy;

      default:
        return weatherCloudy;
    }
  }

  return (
    <img
      style={{width: size, height: size, maxWidth: '100%', maxHeight: '100%'}}
      className="precipitation-img"
      alt=""
      src={setIcon(precipitationId)}
    />
  );
}

import React from 'react';
import {ForecastTable} from '../../components/ForecastTable/ForecastTable';
import {IWeather} from '../../common/types';

export const ForecastWeek = ({weather}: {
  weather: IWeather;
}): JSX.Element => (
  <>{weather.cod !== 0 ? <ForecastTable weather={weather} /> : ''}</>
);

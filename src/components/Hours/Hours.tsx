import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import {Hour} from '../Hour/Hour';
import {IHoursProps, ListForecastItem} from '../../types/types';

export const Hours = ({forecast}: IHoursProps): JSX.Element => (
  <div className="hours">
    <Scrollbars>
      {forecast.map((item: ListForecastItem) => (
        <Hour key={item.dt} forecastItem={item} />
      ))}
    </Scrollbars>
  </div>
);

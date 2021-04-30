import React from 'react';
import {Input} from '../../components/Input/Input';
import {Info} from '../../components/Info/Info';
import {Scale} from '../../components/Scale/Scale';
import {IWeather} from '../../types/types';

export const Main = ({weather}: {weather: IWeather}): JSX.Element => (
  <>
    <Input />
    <Info temp weather={weather} />
    <Scale weather={weather} />
  </>
);

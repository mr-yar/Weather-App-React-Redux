import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Main} from '../pages/Main/Main';
import {ForecastTable} from '../components/ForecastTable/ForecastTable';
import {IWeather} from '../types/types';

export const Routes = ({weather}: {
  weather: IWeather;
}): JSX.Element => (
  <Switch>
    <Route exact path="/">
      <Main weather={weather} />
    </Route>
    <Route exact path="/forecast">
      {weather.cod !== 0 ? <ForecastTable weather={weather} /> : ''}
    </Route>
  </Switch>
);

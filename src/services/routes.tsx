import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Main} from '../pages/Main/Main';
import {ForecastWeek} from '../pages/ForecastWeek/ForecastWeek';
import {IWeather} from '../common/types';

export const Routes = ({weather}: {
  weather: IWeather;
}): JSX.Element => (
  <Switch>
    <Route exact path="/">
      <Main weather={weather} />
    </Route>
    <Route exact path="/forecast">
      <ForecastWeek weather={weather} />
    </Route>
  </Switch>
);

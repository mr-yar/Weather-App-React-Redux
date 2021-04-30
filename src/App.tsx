import React from 'react';
import {useSelector} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {RootState} from './redux/store';
import {Routes} from './services/routes';
import {setBg} from './utils/utils';
import {IWeather} from './types/types';
import './styles/main.sass';

function App(): JSX.Element {
  const weather: IWeather = useSelector(
    (state: RootState) => state.inputReducer.weather
  );

  return (
    <Router>
      <div className={setBg(weather)}>
        <div className="container">
          <Routes weather={weather} />
        </div>
      </div>
    </Router>
  );
}

export default App;

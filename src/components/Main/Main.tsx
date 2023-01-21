import React from 'react';

import { WeatherByTimeList } from 'src/features/weather-by-time-list/WeatherByTimeList';

// import s from './Main.module.scss';

type PropTypes = {};

export const Main: React.FC<PropTypes> = () => {
  return <WeatherByTimeList />;
};

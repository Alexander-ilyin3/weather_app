import React from 'react';

import { WeatherTimeCard } from './components/weather-time-card/WeatherTimeCard';
import { useMapToWeatherTimeCard } from './hook/useMapToWeatherTimeCard';
import { useAppSelector } from 'src/hooks';
import { weatherResponseSelector } from 'src/redux/selectors';

import s from './WeatherByTimeList.module.scss';

export const WeatherByTimeList: React.FC = () => {
  const weatherResponse = useAppSelector(weatherResponseSelector);
  const cardsInfo = useMapToWeatherTimeCard(weatherResponse.value);

  return (
    <div className={s.Root}>
      {cardsInfo.map((cardInfo, i) => {
        return <WeatherTimeCard cardInfo={cardInfo} key={i} />;
      })}
    </div>
  );
};

import React from 'react';

import { WeatherTimeCard } from './components/weather-time-card/WeatherTimeCard';
import { useMapToWeatherTimeCard } from './hook/useMapToWeatherTimeCard';
import { EmptyState } from 'src/components/EmptyState/EmptyState';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { weatherCardSelector, weatherResponseSelector } from 'src/redux/selectors';
import { saveWeatherCard } from 'src/redux/slices/weatherCard';

import s from './WeatherByTimeList.module.scss';

export const WeatherByTimeList: React.FC = () => {
  const weatherResponse = useAppSelector(weatherResponseSelector);
  const cardsInfo = useMapToWeatherTimeCard(weatherResponse.value);
  const selectedCard = useAppSelector(weatherCardSelector);
  const dispatch = useAppDispatch();

  return (
    <div className={s.Root} id="weather-list">
      {cardsInfo.length ? (
        cardsInfo.map((cardInfo, i) => {
          return (
            <WeatherTimeCard
              isSelected={selectedCard.value === cardInfo}
              onClick={() => dispatch(saveWeatherCard(cardInfo))}
              cardInfo={cardInfo}
              key={i}
            />
          );
        })
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

import React, { useState } from 'react';

import { WeatherTimeCard } from './components/weather-time-card/WeatherTimeCard';
import { useMapToWeatherTimeCard } from './hook/useMapToWeatherTimeCard';
import { useAppSelector } from 'src/hooks';
import { WeatherCardInfo } from 'src/models/WeatherCardInfo';
import { weatherResponseSelector } from 'src/redux/selectors';

import s from './WeatherByTimeList.module.scss';

export const WeatherByTimeList: React.FC = () => {
  const weatherResponse = useAppSelector(weatherResponseSelector);
  const cardsInfo = useMapToWeatherTimeCard(weatherResponse.value);
  const [selectedCard, setSelectedCard] = useState<WeatherCardInfo>();

  return (
    <div className={s.Root} id="weather-list">
      {cardsInfo.map((cardInfo, i) => {
        return (
          <WeatherTimeCard
            isSelected={selectedCard === cardInfo}
            onClick={() => setSelectedCard(cardInfo)}
            cardInfo={cardInfo}
            key={i}
          />
        );
      })}
    </div>
  );
};

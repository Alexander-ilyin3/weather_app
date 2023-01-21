import React from 'react';

import { getWeatherPicturePath } from './helpers/getWeatherPicturePath';
import { WeatherCardInfo } from 'src/models/WeatherCardInfo';

import s from './WeatherTimeCard.module.scss';

type PropTypes = {
  cardInfo: WeatherCardInfo;
};

export const WeatherTimeCard: React.FC<PropTypes> = ({ cardInfo }) => {
  const { timeLabel, weatherInfo, cityCountryLabel } = cardInfo;

  const onCardClick = () => {
    console.log({ cardInfo });
  };

  const weatherPicturePath = getWeatherPicturePath(weatherInfo);

  return (
    <div className={s.Root} onClick={onCardClick}>
      <h5>{timeLabel}</h5>
      <img src={weatherPicturePath}></img>
      <span></span>
      <span>{cityCountryLabel}</span>
    </div>
  );
};

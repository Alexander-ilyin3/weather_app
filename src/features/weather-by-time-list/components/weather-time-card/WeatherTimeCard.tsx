import clsx from 'clsx';
import React from 'react';

import { getWeatherPicturePath } from './helpers/getWeatherPicturePath';
import { WeatherCardInfo } from 'src/models/WeatherCardInfo';

import s from './WeatherTimeCard.module.scss';

type PropTypes = {
  cardInfo: WeatherCardInfo;
  isSelected: boolean;
  onClick: () => void;
};

export const WeatherTimeCard: React.FC<PropTypes> = ({ cardInfo, isSelected, onClick }) => {
  const { timeLabel, weatherInfo, cityCountryLabel } = cardInfo;
  const { temp_max, temp_min, temp } = cardInfo.weatherInfo.main;

  const weatherPicturePath = getWeatherPicturePath(weatherInfo);

  return (
    <div className={clsx(s.Root, isSelected && s.Active)} onClick={onClick}>
      <h5>{timeLabel}</h5>
      <img src={weatherPicturePath}></img>
      <div className={s.DescriptionContainer}>
        {temp_max === temp_min ? (
          <span className={s.Temperature_label}>{Math.round(temp_max)}°</span>
        ) : (
          <span className={s.Temperature_label}>
            {Math.round(temp_min)}
            <span className={s.Dash}> — </span>
            {Math.round(temp_max)}°
          </span>
        )}
        <span hidden data-temperature={Math.round(temp)}></span>
        <span className={s.CityLabel}>{cityCountryLabel}</span>
      </div>
    </div>
  );
};

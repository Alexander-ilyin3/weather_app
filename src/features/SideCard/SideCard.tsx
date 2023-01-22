import React, { useCallback } from 'react';

import { getWeatherPicturePath } from '@utils/getWeatherPicturePath';

import { EmptyState } from 'src/components/EmptyState/EmptyState';
import { useAppSelector } from 'src/hooks';
import { weatherCardSelector } from 'src/redux/selectors';

import s from './SideCard.module.scss';

type BottomItemPair = { label: string; description: string };

export const SideCard: React.FC = () => {
  const selectedWeatherCard = useAppSelector(weatherCardSelector);
  const cardInfo = selectedWeatherCard.value;

  const BottomItemPair = useCallback<React.FC<BottomItemPair>>(({ label, description }) => {
    return (
      <div className={s.BottomItemPair}>
        <span className={s.Label}>{label}</span>
        <span className={s.Descripton}>{description}</span>
      </div>
    );
  }, []);

  if (!cardInfo) {
    return (
      <div className={s.Root} style={{ height: 600 }}>
        <EmptyState />
      </div>
    );
  }

  const bottomInfoPairsData: BottomItemPair[] = [
    {
      label: 'wind',
      description: `${Math.round(cardInfo?.weatherInfo.wind.speed)}km/h`,
    },
    {
      label: 'humidity',
      description: `${Math.round(cardInfo?.weatherInfo.main.humidity)}%`,
    },
    {
      label: 'cloudiness',
      description: `${Math.round(cardInfo?.weatherInfo.clouds.all)}%`,
    },
  ];

  return (
    <div className={s.Root}>
      {selectedWeatherCard.value ? (
        <div className={s.InfoContainer}>
          <span className={s.DateLabel}>{cardInfo.timeLabel}</span>
          <div className={s.TopInfoContainer}>
            <span className={s.CityLabel}>{cardInfo.cityCountryLabel}</span>
            <span className={s.TemperatureLabel}>{Math.round(cardInfo.weatherInfo.main.temp)}°</span>
            <span className={s.WeatherSummaryLabel}>{cardInfo.weatherInfo.weather[0].main}</span>
            <span className={s.HighLowTemperatureLabel}>
              <span>H:{Math.round(cardInfo.weatherInfo.main.temp_min)}</span>
              <i>°</i>&nbsp;
              <span>L:{Math.round(cardInfo.weatherInfo.main.temp_max)}</span>
              <i>°</i>
            </span>
          </div>
          <img src={getWeatherPicturePath(cardInfo.weatherInfo)}></img>
          <div className={s.BottomInfo}>
            {bottomInfoPairsData.map(({ description, label }, i) => (
              <BottomItemPair key={i} description={description} label={label} />
            ))}
          </div>
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

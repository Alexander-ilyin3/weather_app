import React from 'react';

import { WeatherApi } from '@api/index';

import { Button } from '../Button/Button';
import { useAppSelector } from 'src/hooks';
import { selectedCitySelector, selectedDateRangeSelector } from 'src/redux/selectors';

import s from './SearchButton.module.scss';

type PropTypes = {};

export const SearchButton: React.FC<PropTypes> = () => {
  const city = useAppSelector(selectedCitySelector);
  const dateRange = useAppSelector(selectedDateRangeSelector);

  const onSearchClick = async () => {
    const lat = city.value?.lat;
    const lon = city.value?.lon;
    // TODO: remove test useEffect
    console.log({ city });
    console.log({ dateRange });

    if (lat && lon && dateRange.value) {
      const response = await WeatherApi.getWeather({
        lat,
        lon,
        dateRange: dateRange.value,
      });
      // TODO: remove test useEffect
      console.log({ response });
    }
  };

  return (
    <Button onClick={onSearchClick} classes={s.Root}>
      Serach
    </Button>
  );
};

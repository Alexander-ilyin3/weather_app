import React from 'react';

import { WeatherApi } from '@api/index';

import { Button } from 'src/components/Button/Button';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { selectedCitySelector, selectedDateRangeSelector } from 'src/redux/selectors';
import { saveWeatherResponse } from 'src/redux/slices/weatherResponse';

import s from './SearchButton.module.scss';

export const SearchButton: React.FC = () => {
  const city = useAppSelector(selectedCitySelector);
  const dateRange = useAppSelector(selectedDateRangeSelector);

  const dispatch = useAppDispatch();

  const onSearchClick = async () => {
    const lat = city.value?.lat;
    const lon = city.value?.lon;

    if (lat && lon && dateRange.value) {
      const response = await WeatherApi.getWeather({
        lat,
        lon,
        dateRange: dateRange.value,
      });
      dispatch(saveWeatherResponse(response.data));
    }
  };

  return (
    <Button onClick={onSearchClick} classes={s.Root}>
      Search
    </Button>
  );
};

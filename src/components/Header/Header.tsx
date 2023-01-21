import React, { useState } from 'react';

import { CityDto } from '@api/models/cities.dto';

import { useThrottle } from '@utils/withThrottle';

import { Autocomplete } from '../Autocomplete/Autocomplete';
import { Button } from '../Button/Button';
import { DateRangeOptions } from '../DateRangeOptions/DateRangeOptions';
// import { DateRangeOptions } from '../Select/DateRangeOptions';
import { useGetCities } from './hooks/useGetCities';
import { useAppDispatch } from 'src/hooks';
import { saveCity } from 'src/redux/slices/cities';

import s from './Header.module.scss';

export const Header: React.FC = () => {
  const [value, setValue] = useState('');
  const throtteledValue = useThrottle(value);
  const dispatch = useAppDispatch();
  // TODO: remove test data
  // const cities: { name: string }[] = [{ name: 'One' }, { name: 'Two' }, { name: 'Three' }]; //useGetCities(throtteledValue);
  const cities = useGetCities(throtteledValue);

  const onCitySelected = (city: CityDto) => {
    dispatch(saveCity(city));
  };

  return (
    <>
      <h1>Weather</h1>
      <header className={s.Root}>
        <Autocomplete
          label="Select City"
          placeholder="Please choose a city"
          value={value}
          onChange={(string) => setValue(string)}
          autocompleteData={cities}
          RenderItem={({ name }) => {
            return <div>{name}</div>;
          }}
          onItemSelect={onCitySelected}
        />
        <DateRangeOptions />
        <Button>Search</Button>
      </header>
    </>
  );
};

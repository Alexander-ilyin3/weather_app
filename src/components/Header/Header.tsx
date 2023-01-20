import React, { useState } from 'react';

import { CityDto } from '@api/models/cities.dto';

import { useThrottle } from '@utils/withThrottle';

import { Autocomplete } from '../Autocomplete/Autocomplete';
import { useGetCities } from './hooks/useGetCities';
import { useAppDispatch } from 'src/hooks';
import { saveCity } from 'src/redux/slices/cities';

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
  );
};

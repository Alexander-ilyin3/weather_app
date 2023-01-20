import React, { useState } from 'react';

import { useThrottle } from '@utils/withThrottle';

import { Autocomplete } from '../Autocomplete/Autocomplete';
import { useGetCities } from './hooks/useGetCities';

type PropTypes = {};

export const Header: React.FC<PropTypes> = () => {
  const [value, setValue] = useState('');
  const throtteledValue = useThrottle(value);

  // TODO: remove test data
  // const cities: { name: string }[] = [{ name: 'One' }, { name: 'Two' }, { name: 'Three' }]; //useGetCities(throtteledValue);
  const cities = useGetCities(throtteledValue);

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
    />
  );
};

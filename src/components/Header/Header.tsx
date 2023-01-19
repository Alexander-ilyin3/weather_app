import React, { useState } from 'react';

import { Autocomplete } from '../Autocomplete/Autocomplete';
import { Button } from '../Button/Button';

import styles from './Header.module.scss';

type PropTypes = {};

export const Header: React.FC<PropTypes> = () => {
  const [value, setValue] = useState('');

  return (
    <Autocomplete
      label="Select City"
      placeholder="Please choose a city"
      value={value}
      onChange={(string) => setValue(string)}
    />
  );
};

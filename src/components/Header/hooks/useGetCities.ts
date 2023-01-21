import { useCallback, useEffect, useState } from 'react';

import { CityDto } from '@api/cities/models/cities.dto';

import { CitiesApi } from 'src/api';
import config from 'src/config';

export const useGetCities = (inputValue: string) => {
  const [cities, setCities] = useState<CityDto[]>([]);
  const getCities = useCallback(async () => {
    console.log('evaluating...', inputValue);
    const response = await CitiesApi.getCities({ appid: config.appid, q: `${inputValue},,UA`, limit: 5 });

    return response;
  }, [inputValue]);

  useEffect(() => {
    const request = async () => {
      if (!inputValue || inputValue.length < 2) {
        setCities([]);
        return;
      }

      const response = await getCities();
      if (response.status === 200) {
        setCities(response.data);
      }
      console.log({ response });
    };

    request();
  }, [inputValue, getCities]);

  return cities;
};

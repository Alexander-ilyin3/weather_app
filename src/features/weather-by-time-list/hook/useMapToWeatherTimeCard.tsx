import { useEffect, useState } from 'react';

import { WeatherResponseDto } from '@api/index';

import { WeatherCardInfo } from 'src/models/WeatherCardInfo';

export const useMapToWeatherTimeCard = (weatherResponse: WeatherResponseDto | null) => {
  const [weatherTimeCardlist, setWeatherTimeCardList] = useState<WeatherCardInfo[]>([]);

  useEffect(() => {
    if (!weatherResponse) {
      return;
    }

    const timeLabels = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];
    const cityCountryLabel = `${weatherResponse.city.name}, Ukraine`;

    const newWeatherTimeCardList: WeatherCardInfo[] = [];

    weatherResponse.list.map((weatherInfo, i) => {
      newWeatherTimeCardList.push({ weatherInfo, timeLabel: timeLabels[i], cityCountryLabel });
    });

    setWeatherTimeCardList(newWeatherTimeCardList);
  }, [weatherResponse]);

  return weatherTimeCardlist;
};

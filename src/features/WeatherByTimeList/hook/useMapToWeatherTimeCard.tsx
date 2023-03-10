import { useEffect, useState } from 'react';

import { WeatherResponseDto } from '@api/index';

import { WeatherCardInfo } from 'src/models/WeatherCardInfo';

export const useMapToWeatherTimeCard = (weatherResponse: WeatherResponseDto | null) => {
  const [weatherTimeCardlist, setWeatherTimeCardList] = useState<WeatherCardInfo[]>([]);

  useEffect(() => {
    if (!weatherResponse) {
      return;
    }

    const cnt = weatherResponse.cnt;

    const timeLabels = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];
    const cityCountryLabel = `${weatherResponse.city.name}, Ukraine`;

    const newWeatherTimeCardList: WeatherCardInfo[] = [];

    weatherResponse.list.map((weatherInfo, i) => {
      let timelabel: string;
      if (cnt === 8) {
        timelabel = timeLabels[i];
        newWeatherTimeCardList.push({ weatherInfo, timeLabel: timelabel, cityCountryLabel });
      } else if (i === 0 || i === 8 || i === 16 || i === 24 || i === 32) {
        const options = {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        } as const;

        timelabel = new Date(weatherInfo.dt * 1000).toLocaleDateString(undefined, options);
        newWeatherTimeCardList.push({ weatherInfo, timeLabel: timelabel, cityCountryLabel });
      }
    });

    setWeatherTimeCardList(newWeatherTimeCardList);
  }, [weatherResponse]);

  return weatherTimeCardlist;
};

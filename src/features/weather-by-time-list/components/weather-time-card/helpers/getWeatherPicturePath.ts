import { WeatherInfoByTime } from '@api/index';

export const getWeatherPicturePath = (info: WeatherInfoByTime) => {
  const pictureCode = info.weather[0].icon.replace(/n/, 'd');

  const correction: Record<string, string> = {
    '03d': '02d',
    '04d': '02d',
    '09d': '10d',
  };

  const picName = correction[pictureCode] || pictureCode;

  return `/image/${picName}.png`;
};

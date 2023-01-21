import { WeatherResponseDto } from '@api/index';

export type WeatherCardInfo = {
  weatherInfo: WeatherResponseDto['list'][number];
  timeLabel: string;
  cityCountryLabel: string;
};

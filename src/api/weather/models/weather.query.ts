import { DateRangeButtonOptions } from 'src/features/DateRangeOptions/DateRangeOptions';

export type GetWeatherParams = {
  lat: number;
  lon: number;
  dateRange: DateRangeButtonOptions;
};

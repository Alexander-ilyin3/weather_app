import { DateRangeButtonOptions } from 'src/components/DateRangeOptions/DateRangeOptions';

export type GetWeatherParams = {
  lat: number;
  lon: number;
  dateRange: DateRangeButtonOptions;
};

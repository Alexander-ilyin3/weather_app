import { RootState } from './store';

export const selectedCitySelector = (state: RootState) => state.city;
export const selectedDateRangeSelector = (state: RootState) => state.dateRange;
export const weatherResponseSelector = (state: RootState) => state.weatherResponse;
export const weatherCardSelector = (state: RootState) => state.weatherCard;

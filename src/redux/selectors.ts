import { RootState } from './store';

export const selectedCitySelector = (state: RootState) => state.city;
export const selectedDateRangeSelector = (state: RootState) => state.dateRange;

import { createSlice } from '@reduxjs/toolkit';
import { WeatherCardInfo } from 'src/models/WeatherCardInfo';

type InitialState = {
  value: null | WeatherCardInfo;
};

const initialState: InitialState = {
  value: null,
};

export const weatherCardSlice = createSlice({
  name: 'weatherCard',
  initialState,
  reducers: {
    saveWeatherCard: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { saveWeatherCard } = weatherCardSlice.actions;

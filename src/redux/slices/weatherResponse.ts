import { WeatherResponseDto } from '@api/index';

import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  value: null | WeatherResponseDto;
};

const initialState: InitialState = {
  value: null,
};

export const weatherResponseSlice = createSlice({
  name: 'weatherResponse',
  initialState,
  reducers: {
    saveWeatherResponse: (state, { payload }) => {
      state.value = payload;
    },
    clearWeatherResponse: (state) => {
      state.value = null;
    },
  },
});

export const { clearWeatherResponse, saveWeatherResponse } = weatherResponseSlice.actions;

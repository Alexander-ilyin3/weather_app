import { citiesSlice } from './slices/cities';
import { dateRangeSlice } from './slices/dateRange';
import { weatherCardSlice } from './slices/weatherCard';
import { weatherResponseSlice } from './slices/weatherResponse';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  // reducer: citiesSlice.reducer,
  reducer: {
    city: citiesSlice.reducer,
    dateRange: dateRangeSlice.reducer,
    weatherResponse: weatherResponseSlice.reducer,
    weatherCard: weatherCardSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

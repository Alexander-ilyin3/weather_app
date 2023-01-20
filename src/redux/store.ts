import { citiesSlice } from './slices/cities';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  // reducer: citiesSlice.reducer,
  reducer: {
    city: citiesSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

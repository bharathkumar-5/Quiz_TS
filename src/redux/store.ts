import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './slices/quizSlice';
import leaderboardReducer from './slices/leaderboardSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    leaderboard: leaderboardReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

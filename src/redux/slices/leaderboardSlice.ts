import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LeaderboardState {
  users: { name: string, score: number }[];
}

const initialState: LeaderboardState = {
  users: [],
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    setLeaderboard(state, action: PayloadAction<{ name: string, score: number }[]>) {
      state.users = action.payload.sort((a, b) => b.score - a.score); // Sort by score descending
    },
  },
});

export const { setLeaderboard } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;

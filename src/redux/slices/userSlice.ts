import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define types for the user state
interface UserState {
  name: string;
  score: number;
  quizTaken: boolean;
}

const initialState: UserState = {
  name: '',
  score: 0,
  quizTaken: false,
};

// Create a slice of the Redux state for user data
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set user name
    setUserName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    
    // Action to update user's score after completing the quiz
    setUserScore(state, action: PayloadAction<number>) {
      state.score = action.payload;
      state.quizTaken = true;  // Mark quiz as taken once the score is set
    },

    // Action to reset user state (e.g., after finishing a quiz or restarting)
    resetUser(state) {
      state.name = '';
      state.score = 0;
      state.quizTaken = false;
    }
  }
});

// Export the actions to dispatch in the components
export const { setUserName, setUserScore, resetUser } = userSlice.actions;

// Export the reducer to be added to the store
export default userSlice.reducer;

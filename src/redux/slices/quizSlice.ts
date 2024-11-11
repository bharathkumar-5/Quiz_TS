import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuizState {
  currentQuestionIndex: number;
  questions: any[];
  answers: string[];
  score: number;
}

const initialState: QuizState = {
  currentQuestionIndex: 0,
  questions: [],
  answers: [],
  score: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions(state, action: PayloadAction<any[]>) {
      state.questions = action.payload;
    },
    nextQuestion(state) {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    previousQuestion(state) {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    submitAnswer(state, action: PayloadAction<string>) {
      state.answers.push(action.payload);
      if (action.payload === state.questions[state.currentQuestionIndex].correct_answer) {
        state.score += 1;
      }
    },
  },
});

export const { setQuestions, nextQuestion, previousQuestion, submitAnswer } = quizSlice.actions;
export default quizSlice.reducer;

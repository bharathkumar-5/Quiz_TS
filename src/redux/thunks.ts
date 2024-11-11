import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';  
import axios from 'axios';  
import { setQuizQuestions, setLoading, setError } from './slices/quizSlice';


interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  type: string;
}
export const fetchQuizQuestions = createAsyncThunk(
  'quiz/fetchQuestions',
  async (
    { category, difficulty, numberOfQuestions }: { category: string, difficulty: string, numberOfQuestions: number },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(setLoading(true));  
      const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`;
      
      const response = await axios.get(url);
      if (response.data.results) {
        dispatch(setQuizQuestions(response.data.results));
      }
      
      dispatch(setLoading(false));  
    } catch (error) {
      dispatch(setLoading(false)); 
      dispatch(setError('Failed to load questions. Please try again later.'));
      return rejectWithValue('Failed to fetch quiz questions');
    }
  }
);

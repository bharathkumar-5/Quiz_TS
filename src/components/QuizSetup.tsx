import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select, Stack } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setQuestions } from '../redux/slices/quizSlice';
import { fetchTriviaQuestions } from '../utils/api';

const QuizSetup = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('9'); // Default: General Knowledge
  const [difficulty, setDifficulty] = useState('easy');
  const [questionsCount, setQuestionsCount] = useState(10);
  
  const dispatch = useDispatch();
  const history = useHistory();

  const handleStartQuiz = async () => {
    // Fetch quiz questions from the API based on the selected options
    const questions = await fetchTriviaQuestions(Number(questionsCount), category, difficulty);
    dispatch(setQuestions(questions)); // Set questions in Redux store
    history.push('/quiz'); // Navigate to the quiz page
  };

  return (
    <Box p={4} maxW="md" mx="auto">
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Your Name</FormLabel>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="9">General Knowledge</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Difficulty</FormLabel>
          <Select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Number of Questions</FormLabel>
          <Select
            value={questionsCount}
            onChange={(e) => setQuestionsCount(e.target.value)}
          >
            {[5, 10, 15, 20].map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button
          onClick={handleStartQuiz}
          colorScheme="blue"
          disabled={!name}
        >
          Start Quiz
        </Button>
      </Stack>
    </Box>
  );
};

export default QuizSetup;

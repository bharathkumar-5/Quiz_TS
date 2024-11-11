import React, { useState, useEffect } from 'react';
import { Box, Button, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { nextQuestion, previousQuestion, submitAnswer } from '../redux/slices/quizSlice';
import { RootState } from '../redux/store';
import { useQuizTimer } from '../hooks/useQuizTimer';
import FeedbackModal from './FeedbackModal';

const QuizPage = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => state.quiz.questions);
  const currentQuestionIndex = useSelector((state: RootState) => state.quiz.currentQuestionIndex);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const difficulty = 'easy'; // Here, you can get difficulty from the state if it's saved.
  const timeLeft = useQuizTimer(difficulty); // Custom hook for countdown timer

  const handleSubmit = () => {
    dispatch(submitAnswer(selectedAnswer)); // Dispatch answer to store
    setIsModalOpen(true); // Open feedback modal
  };

  const handleNext = () => {
    dispatch(nextQuestion());
    setSelectedAnswer('');
  };

  const handlePrevious = () => {
    dispatch(previousQuestion());
    setSelectedAnswer('');
  };

  useEffect(() => {
    if (timeLeft === 0) {
      handleSubmit(); // Automatically submit answer when timer reaches 0
    }
  }, [timeLeft]);

  if (!questions.length) return <Text>Loading...</Text>;

  const question = questions[currentQuestionIndex];
  const options = [...question.incorrect_answers, question.correct_answer];
  const shuffledOptions = options.sort(() => Math.random() - 0.5); // Randomize options

  return (
    <Box p={4}>
      <Text fontSize="xl">
        Question {currentQuestionIndex + 1} of {questions.length}
      </Text>
      <Text fontSize="lg" mt={4}>
        {question.question}
      </Text>
      <RadioGroup value={selectedAnswer} onChange={setSelectedAnswer} mt={4}>
        <Stack direction="column">
          {shuffledOptions.map((answer, idx) => (
            <Radio key={idx} value={answer}>
              {answer}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <Text mt={2}>Time Left: {timeLeft}s</Text>
      <Box mt={4}>
        {currentQuestionIndex > 0 && (
          <Button onClick={handlePrevious} mr={2} colorScheme="teal">
            Previous
          </Button>
        )}
        {currentQuestionIndex < questions.length - 1 ? (
          <Button onClick={handleNext} colorScheme="blue">
            Next
          </Button>
        ) : (
          <Button onClick={handleSubmit} colorScheme="green">
            Submit Quiz
          </Button>
        )}
      </Box>
      <FeedbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        correctAnswer={question.correct_answer}
        userAnswer={selectedAnswer}
      />
    </Box>
  );
};

export default QuizPage;

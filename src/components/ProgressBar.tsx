import React from 'react';
import { Box, Progress, Text } from '@chakra-ui/react';

interface ProgressBarProps {
  currentQuestionIndex: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentQuestionIndex, totalQuestions }) => {
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100; // Calculate progress percentage

  return (
    <Box w="100%" mt={4}>
      <Text mb={2} fontSize="sm" fontWeight="semibold">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </Text>
      <Progress value={progress} size="sm" colorScheme="teal" />
    </Box>
  );
};

export default ProgressBar;

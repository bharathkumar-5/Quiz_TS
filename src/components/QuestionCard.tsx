import React from 'react';
import { Box, Text, RadioGroup, Radio, Stack, Button } from '@chakra-ui/react';

interface QuestionCardProps {
  question: string;
  options: string[];
  selectedAnswer: string;
  onSelectAnswer: (answer: string) => void;
  onSubmitAnswer: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  selectedAnswer,
  onSelectAnswer,
  onSubmitAnswer,
}) => {
  return (
    <Box p={4} borderRadius="md" boxShadow="sm" bg="white">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        {question}
      </Text>
      <RadioGroup value={selectedAnswer} onChange={onSelectAnswer}>
        <Stack direction="column" spacing={4}>
          {options.map((option, index) => (
            <Radio key={index} value={option} size="lg">
              {option}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <Button mt={6} colorScheme="teal" onClick={onSubmitAnswer} isDisabled={!selectedAnswer}>
        Submit Answer
      </Button>
    </Box>
  );
};

export default QuestionCard;

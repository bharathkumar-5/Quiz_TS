import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button, Text } from '@chakra-ui/react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  correctAnswer: string;
  userAnswer: string;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose, correctAnswer, userAnswer }) => {
  const isCorrect = userAnswer === correctAnswer;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Answer Feedback</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            {isCorrect ? 'Correct!' : 'Incorrect!'} The correct answer was: {correctAnswer}
          </Text>
          <Button mt={4} colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FeedbackModal;

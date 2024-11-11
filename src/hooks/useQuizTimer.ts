import { useState, useEffect } from 'react';

const useQuizTimer = (difficulty: string) => {
  const [timeLeft, setTimeLeft] = useState<number>(20);
  const timerMap = { easy: 20, medium: 15, hard: 10 };
  
  useEffect(() => {
    setTimeLeft(timerMap[difficulty]);
    const interval = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [difficulty]);

  return timeLeft;
};

export default useQuizTimer;

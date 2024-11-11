export const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes > 9 ? minutes : `0${minutes}`}:${remainingSeconds > 9 ? remainingSeconds : `0${remainingSeconds}`}`;
  };
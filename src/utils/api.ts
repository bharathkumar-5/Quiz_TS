const API_URL = 'https://opentdb.com/api.php';

export const fetchTriviaQuestions = async (amount: number, category: string, difficulty: string) => {
  const url = `${API_URL}?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

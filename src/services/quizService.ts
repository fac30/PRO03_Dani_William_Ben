//
/// WILLIAM -- DATA IMPORT E.g. countries object
// const countriesFilePath = path.join(__dirname, '../../data/countries.json');
// const countriesData = JSON.parse(fs.readFileSync(countriesFilePath, 'utf-8'));

interface Question {
  questionId: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
  difficulty: string;
  type: string;
}

interface Country {
  country: string;
  capital: string;
  capital_difficulty: string;
  country_code: string;
}

let quizzes: { [key: string]: Question[] } = {}; // WILLIAM -- STORE IN DB

export const generateQuiz = async (
  difficulty: string,
  type: string,
  numberOfQuestions: number,
) => {
  try {
    // Fetching countries data based on difficulty
    const response = await fetch(
      `http://localhost:5000/countries?capital_difficulty=${encodeURIComponent(difficulty)}`,
    );

    if (response.status) {
    }

    const countryArray = (await response.json()) as Country[];

    // Randomizing and selecting questions
    const selectedQuestions = countryArray
      .sort(() => 0.5 - Math.random())
      .slice(0, numberOfQuestions)
      .map((country: Country, index: number) => {
        const options = generateOptions(country.capital, countryArray);
        return {
          questionId: `${index + 1}`,
          questionText: `What is the capital of ${country.country}?`,
          options,
          correctAnswer: country.capital,
          difficulty: country.capital_difficulty,
          type: 'country',
        };
      });

    const quizId = Math.random().toString(36).substring(7);
    quizzes[quizId] = selectedQuestions;

    // Return the quiz ID and questions for the frontend
    return { quizId, questions: selectedQuestions };
  } catch (error) {
    console.error('Error generating quiz:', error);
    throw new Error('Failed to generate quiz');
  }
};

export const generateOptions = (
  correctAnswer: string,
  countries: any[],
): string[] => {
  const wrongAnswers = countries
    .filter((country) => country.capital !== correctAnswer)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3) // Select 3 wrong answers
    .map((country) => country.capital);

  return [...wrongAnswers, correctAnswer].sort(() => 0.5 - Math.random());
};

export const checkAnswer = (
  quizId: string,
  questionId: string,
  selectedAnswer: string,
) => {
  const quiz = quizzes[quizId];
  if (!quiz) {
    return { error: 'Quiz not found' };
  }

  const question = quiz.find((q) => q.questionId === questionId);
  if (!question) {
    return { error: 'Question not found' };
  }

  const isCorrect = question.correctAnswer === selectedAnswer;
  return { questionId, isCorrect, correctAnswer: question.correctAnswer };
};

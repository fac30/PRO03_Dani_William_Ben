import fs from 'fs';
import path from 'path';

/// WILLIAM -- DATA IMPORT E.g. countries object
const countriesFilePath = path.join(__dirname, '../../data/countries.json');
const countriesData = JSON.parse(fs.readFileSync(countriesFilePath, 'utf-8'));

interface Question {
  questionId: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
  difficulty: string;
  type: string;
}

let quizzes: { [key: string]: Question[] } = {}; // WILLIAM -- STORE IN DB
// Quiz Table: quizId, created_at
// Question Table: questionId, quizId, questionText, options, etc.

export const generateQuiz = (difficulty: string, type: string, numberOfQuestions: number) => {
  const filteredCountries = countriesData.filter((country: any) => country.capital_difficulty === difficulty);

  const selectedQuestions = filteredCountries
    .sort(() => 0.5 - Math.random()) // cool way to randomize 
    .slice(0, numberOfQuestions)     // Select required number of questions
    .map((country: any, index: number) => {
      const options = generateOptions(country.capital, filteredCountries);
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

  return { quizId, questions: selectedQuestions };
};

const generateOptions = (correctAnswer: string, countries: any[]): string[] => {
  const wrongAnswers = countries
    .filter((country) => country.capital !== correctAnswer)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3) // Select 3 wrong answers
    .map((country) => country.capital);

  return [...wrongAnswers, correctAnswer].sort(() => 0.5 - Math.random());
};

export const checkAnswer = (quizId: string, questionId: string, selectedAnswer: string) => {
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


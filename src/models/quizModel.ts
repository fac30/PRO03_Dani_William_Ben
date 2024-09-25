// TODO

export interface Question {
  questionId: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
  difficulty: string;
  type: string;
}

export interface Quiz {
  quizId: string;
  questions: Question[];
  createdAt?: Date;
}

export interface Answer {
  questionId: string;
  selectedAnswer: string;
}

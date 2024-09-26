describe('Quiz App - Quiz Flow', () => {
  beforeEach(() => {
    interface QuizQuestion {
      questionText: string;
      options: string[];
      correctAnswer: string;
    }

    const quizData: { questions: QuizQuestion[] } = {
      questions: [
        { questionText: 'What is the capital of France?', options: ['Paris', 'Berlin', 'Madrid'], correctAnswer: 'Paris' },
        { questionText: 'What is the capital of Germany?', options: ['London', 'Berlin', 'Rome'], correctAnswer: 'Berlin' },
      ],
    };

    // Set the quiz data in local storage
    localStorage.setItem('quizData', JSON.stringify(quizData));
    cy.visit('http://localhost:5000/quiz.html');
  });

  it('should display and allow answering quiz questions', () => {
    cy.get('#questionText').should('contain', 'What is the capital of France?');

    cy.get('#answerButtons button').contains('Paris').click();

    cy.get('#result').should('contain', 'Correct!');

    cy.get('#nextButton').click();

    cy.get('#questionText').should('contain', 'What is the capital of Germany?');

    // Click on an incorrect answer
    cy.get('#answerButtons button').contains('Rome').click();

    // Assert that feedback is shown
    cy.get('#result').should('contain', 'Incorrect! The correct answer was Berlin.');

    cy.get('#nextButton').click();

    // TODO -- continue -- results page    
    cy.url().should('include', 'result.html');
  });
});


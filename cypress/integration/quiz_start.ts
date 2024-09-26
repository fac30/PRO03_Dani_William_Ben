describe('Quiz App - Start Quiz', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000/index.html');
  });

  it('should allow the user to select quiz options and start the quiz', () => {
    cy.get('#quizType').select('capitals');
    
    cy.get('#difficulty').select('easy');
    
    cy.get('#numQuestions').select('5');
    
    cy.get('button[type="submit"]').click();
    
    cy.url().should('include', 'quiz.html');

    cy.get('#questionText').should('be.visible');
  });
});


import { generateOptions } from '../src/services/quizService';

describe('generateOptions', () => {

  it('should return an array of exactly four elements', () => {
    const correctAnswer = 'Paris';
    const countries = [
      { capital: 'London' },
      { capital: 'Berlin' },
      { capital: 'Madrid' },
      { capital: 'Rome' },
      { capital: 'Paris' },
    ];
    
    const options = generateOptions(correctAnswer, countries);
    expect(options).toHaveLength(4);
  });

  it('should return options in a random order', () => {
    const correctAnswer = 'Paris';
    const countries = [
      { capital: 'London' },
      { capital: 'Berlin' },
      { capital: 'Madrid' },
      { capital: 'Rome' },
      { capital: 'Paris' },
    ];
    
    const options1 = generateOptions(correctAnswer, countries);
    const options2 = generateOptions(correctAnswer, countries);
    expect(options1).not.toEqual(options2); // Randomness test
  });

  it('should include the correct answer in the options array', () => {
    const correctAnswer = 'Paris';
    const countries = [
      { capital: 'London' },
      { capital: 'Berlin' },
      { capital: 'Madrid' },
      { capital: 'Rome' },
      { capital: 'Paris' },
    ];
    
    const options = generateOptions(correctAnswer, countries);
    expect(options).toContain(correctAnswer);
  });

  it('should return an array of four strings', () => {
    const correctAnswer = 'Paris';
    const countries = [
      { capital: 'London' },
      { capital: 'Berlin' },
      { capital: 'Madrid' },
      { capital: 'Rome' },
      { capital: 'Paris' },
    ];
    
    const options = generateOptions(correctAnswer, countries);
    expect(Array.isArray(options)).toBe(true);
    options.forEach(option => {
      expect(typeof option).toBe('string');
    });
  });

});


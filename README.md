# PRO03_Dani_William_Ben

## Quiz Application

### Setup 
Copy `.env.example` to `.env` and complete 

### Commands

#### Running Development Environment

```ts
npx ts-node src/index.ts
```

#### Installing Packages
Don't forget to add types. Check respective docs. E.g.: 
```ts
npm install dotenv node-fetch
npm install @types/node-fetch --save-dev
```

#### Testing: Jest
* Add tests to /src/tests
* file name {test_object}.test.ts
```ts
npm test
```
[ts-jest documentation](https://www.npmjs.com/package/ts-jest)

#### Linter: Prettier
```ts
npm run lint
npm run formatter
```

## API

country code:  ISO 3166-1 alpha-2


### Example payload

```javascript
{
  "quizId": "123456",
  "questions": [
    {
      "questionId": "1",
      "questionText": "What is the capital of France?",
      "options": ["Paris", "London", "Berlin", "Rome"],
      "correctAnswer": "Paris",
      "difficulty": "easy",
      "type": "country",
      "answeredCorrectly": null
    },
    {
      "questionId": "2",
      "questionText": "What is the capital of Germany?",
      "options": ["Vienna", "Berlin", "Madrid", "Prague"],
      "correctAnswer": "Berlin",
      "difficulty": "easy",
      "type": "country",
      "answeredCorrectly": null
    }
  ]
}
```


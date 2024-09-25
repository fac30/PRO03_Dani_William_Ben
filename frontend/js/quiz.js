// quiz.js
let quizData = JSON.parse(localStorage.getItem("quizData"));
let currentQuestionIndex = 0;
let correctAnswers = 0;

document.addEventListener("DOMContentLoaded", () => {
    showQuestion();

    document.getElementById("nextButton").addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.questions.length) {
            showQuestion();
        } else {
            // Go to result page
            localStorage.setItem("correctAnswers", correctAnswers);
            localStorage.setItem("totalQuestions", quizData.questions.length);
            window.location.href = "result.html";
        }
    });
});

function showQuestion() {
    const question = quizData.questions[currentQuestionIndex];
    document.getElementById("currentQuestionNumber").textContent = currentQuestionIndex + 1;
    document.getElementById("questionText").textContent = question.questionText;

    const answerButtons = document.getElementById("answerButtons");
    answerButtons.innerHTML = ''; // Clear old buttons

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option, question.correctAnswer));
        answerButtons.appendChild(button);
    });

    document.getElementById("result").textContent = '';
    document.getElementById("nextButton").style.display = 'none';
}

function checkAnswer(selectedAnswer, correctAnswer) {
    const resultElement = document.getElementById("result");
    if (selectedAnswer === correctAnswer) {
        resultElement.textContent = "Correct!";
        correctAnswers++;
    } else {
        resultElement.textContent = `Incorrect! The correct answer was ${correctAnswer}.`;
    }
    document.getElementById("nextButton").style.display = 'block';
}


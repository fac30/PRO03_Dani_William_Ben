// result.js
document.addEventListener("DOMContentLoaded", () => {
    const correctAnswers = localStorage.getItem("correctAnswers");
    const totalQuestions = localStorage.getItem("totalQuestions");

    document.getElementById("correctAnswers").textContent = correctAnswers;
    document.getElementById("totalQuestions").textContent = totalQuestions;
});


document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const quizType = document.getElementById("quizType").value;
    const difficulty = document.getElementById("difficulty").value;
    const numQuestions = document.getElementById("numQuestions").value;
    //
    //quiz Start
    fetch(`/api/quiz?difficulty=${difficulty}&type=${quizType}&numberOfQuestions=${numQuestions}`)
        .then(response => response.json())
        .then(data => {
            // TEMP - TODO
            localStorage.setItem("quizData", JSON.stringify(data));

            window.location.href = "quiz.html";
        })
        .catch(error => console.error('Error:', error));
});


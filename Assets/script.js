var startQuizBtn = document.querySelector("#start");
var quizFirstPage = document.querySelector("#quiz-starter");
var quizQuestions = document.querySelector("#quiz-questions");
var mainQuestion = document.querySelector("#question");
var choices = document.querySelector("#choices");
var time = 60;
var timerEl = document.querySelector("#time");
var interval;
var questionIndex = 0;


var questionsList = [];
questionsList.push({
    questions: "Inside which HTML element do we put the css file?",
    choices: ["A.<css>", "B.<head>", "C.<script>", "D.<link>"],
    correctAnswer: "<script>",
});
console.log(questionsList)
questionsList.push({
    questions: "Where do you put the script tag in the HTML?",
    choices: ["A.<h1>", "B.<head>", "C.<body>", "D.Both <head> and <body>"],
    correctAnswer: "<body>",
});
questionsList.push({
    questions: "How to make sure that JavaScript in connected with index.html?",
    choices: [
        "A.console.log",
        "B.type something in the console",
        "C.setAttribute",
        "D.create a function",
    ],
    correctAnswer: "console.log",
});
questionsList.push({
    questions: "How do you call and element by ID?",
    choices: [
        "A..getElementbyid",
        "B.function = getElementbyid",
        "C..querySelector",
        "D. getElementbyid()",
    ],
    correctAnswer: "function myFunction",
});
questionsList.push({
    questions: "How do you call a function?",
    choices: [
        "A.call function",
        "B.function = exFunction()",
        "C.exFunction()",
        "D.call function exFunction",
    ],
    correctAnswer: "exFunction()",
});


startQuizBtn.addEventListener("click", function () {
    quizQuestions.style.display = "block";
    quizFirstPage.style.display = "none";
    setQuizQuestions();
    interval = setInterval(countDown, 1000);
    timerEl.textContent = time;
});

function countDown() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        endQuiz()
    };
};

// function answer(correctAnswer === true) {
//     console.log('This is correct!');
// }else {
//     console.log('This is incorrect');
// }


function setQuizQuestions() {
    var currentQuestion = questionsList[questionIndex];
    document.querySelector("#question").textContent = currentQuestion.questions;
    choices.innerHTML = ""
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i];// 
        var button = document.createElement("button");
        button.setAttribute("class", "choice");
        button.setAttribute("value", choice);
        button.textContent = choice;
        choices.appendChild(button);
    }

}

function allAnswers(event) {
    var answer = event.target// whatever they click on 
    if (!answer.matches(".choice")) {
        return
    }
    if (answer.value !== questionsList[questionIndex].correctAnswer) {
        time -= 10;
        if (time < 0) {
            time = 0;
        }
    }
    questionIndex++
    if (time <= 0 || questionIndex === questionsList.length) {
        endQuiz()
    }
    else {
        setQuizQuestions();
    }
}
function endQuiz() {
    clearInterval(interval);
    document.querySelector("#end-screen").style.display = "block"
    document.querySelector("#quiz-questions").style.display = "none"
    document.querySelector("#final-score").textContent = time
}

function saveScore() {
    var initials = document.querySelector("#initials").value.trim();
    if (initials !== "") {
        var scores = JSON.parse(localStorage.getItem("scores")) || [];
        var newScore = { score: time, initials: initials }
        scores.push(newScore)
        localStorage.setItem("scores", JSON.stringify(scores))
        window.location.href = "highscores.html"
    }
}
choices.onclick = allAnswers;
document.querySelector("#submit").onclick = saveScore;
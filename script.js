var answers = ["Index.HTML", "Style.css", "Script.js", "Python.py"];


var question = document.querySelector("#question")
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");


answer1El.addEventListener("click", function () {
    document.getElementById("answer1").onclick = function () { correctAnswer() };

    function correctAnswer() {
        document.getElementById("answer1").innerHTML = "Incorrect!"
    }
});


answer2El.addEventListener("click", function () {
    document.getElementById("answer2").onclick = function () { correctAnswer() };

    function correctAnswer() {
        document.getElementById("answer2").innerHTML = "Incorrect!"
    }
});

answer3El.addEventListener("click", function () {
    document.getElementById("answer3").onclick = function () { correctAnswer() };

    function correctAnswer() {
        document.getElementById("answer3").innerHTML = "Incorrect!"
    }
});

answer4El.addEventListener("click", function () {
    document.getElementById("answer4").onclick = function () { correctAnswer() };

    function correctAnswer() {
        document.getElementById("answer4").innerHTML = "Correct!"
    }
});

function questionTimer() { alert("Timer Complete!"); } setTimeout(questionTimer, 30000)



//     function setAnswerCorrect() {
//         answer1El.textContent = answers;
//         answer2El.textContent = answers;
//         answer3El.textContent = answers;
//         answer4El.textContent = answers;
//     }


// answer1El.addEventListener("click", function () {
//     console.log(answers[0])
//     alert("Incorect Try Again")
// });

// answer2El.addEventListener("click", function () {
//     console.log(answers[1])
//     alert("Incorect Try Again")
// });

// answer3El.addEventListener("click", function () {
//     console.log(answers[2])
//     alert("Incorect Try Again")
// });

// answer4El.addEventListener("click", function () {
//     console.log(answers[3])
//     alert("Correct!")
// });

// if (answer1El === true) {
//     alert("Incorrect")
// }
// let codeQuiz = document.getElementById("code-quiz")

let time = 10

function codeQuiz() {
    let timeInterval = setInterval(() => {
        document.getElementById("code-quiz").innerHTML = "Code Quiz " + time
        time--;
        console.log("TIME: ", time)
        if (time <= 0) {
            clearInterval(timeInterval)
            document.getElementById("code-quiz").innerHTML = "Code Quiz " + 0
        }
    }, 1000)
}

codeQuiz()
//Question Objects
var qOne = {
    Question: "Who makes the best motorcycles",
    choiceA: "USA",
    choiceB: "Germany",
    choiceC: "Italy",
    choiceD: "Japan",
    answer: "Italy",
}
var qTwo = {
    Question: "Who is the greatest racer of all time?",
    choiceA: "Marc Marquez",
    choiceB: "Valentino Rossi",
    choiceC: "Alvaro Bautista",
    choiceD: "Randy Depuniet",
    answer: "Valentino Rossi"
}
var qThree = {
    Question: "Who's America's motorcycle brand?",
    choiceA: "Ducati",
    choiceB: "Yamaha",
    choiceC: "Harley Davidson",
    choiceD: "Ural",
    answer: "Harley Davidson"
}
var qFour = {
    Question: "Which of these brands doesn't run on marinara sauce?",
    choiceA: "Ducati",
    choiceB: "Bimota",
    choiceC: "Aprilia",
    choiceD: "Bajaj",
    answer: "Bajaj"
}






var startQuizBtn = document.getElementById('startQuiz')

// Quiz Timer related variables and functions

var quizTimer = function () {
    var countDown = document.getElementById('countdown')
    var secondsLeft = 100;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        countDown.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval)
            // Need to define rules here for ending quiz on running out of time.
        }
    }, 1000);
}

//question object calling and display function

function presentQuestion(obj) {


}




startQuizBtn.addEventListener('click', quizTimer)

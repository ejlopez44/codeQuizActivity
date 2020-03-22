//Question Objects
var qOne = {
    Question: "Who makes the best motorcycles?",
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

//Globally scoped variables
var questionBlk = document.getElementById('questionBlk')
var startBtn = document.getElementById('startbtn')
var score = ""
var highScores = {}

// Quiz Timer function

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

//Quiz Starting
function startQuiz() {
    ///These two lines remove Start button and Description
    startBtn.style.display = "none";
    document.getElementById('quizDescription').style.display = "none";
    // This function calls the function that creates elements for Question and Button Choice elements
    presentQuestion(qOne);
}

// This block of code updates the question/heading block & takes in the Object names and creates buttons foreach choice...

function presentQuestion(question) {
    questionBlk.innerText = question.Question
    var choiceBtn1 = document.createElement('button');
    choiceBtn1.textContent = question.choiceA
    document.getElementById('btnBlock').appendChild(choiceBtn1)

    var choiceBtn2 = document.createElement('button');
    choiceBtn2.textContent = question.choiceB
    document.getElementById('btnBlock').appendChild(choiceBtn2)

    var choiceBtn3 = document.createElement('button');
    choiceBtn3.textContent = question.choiceC
    document.getElementById('btnBlock').appendChild(choiceBtn3)

    var choiceBtn4 = document.createElement('button');
    choiceBtn4.textContent = question.choiceD
    document.getElementById('btnBlock').appendChild(choiceBtn4)

}
//need to call presentQuestion and give it a parameter

startBtn.addEventListener('click', startQuiz)




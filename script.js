//Question Objects

var questionArray = [
    // questionArray[0], questionArray[0][0].Question
    [
        { Question: "Who makes the best motorcycles?" },
        { choice: "USA", answer: false },
        { choice: "Germany", answer: false },
        { choice: "Italy", answer: true },
        { choice: "Japan", answer: false },
    ], [

        { Question: "Who is the greatest racer of all time?" },
        { choice: "Marc Marquez", answer: false },
        { choice: "Valentino Rossi", answer: true },
        { choice: "Alvaro Bautista", answer: false },
        { choice: "Randy Depuniet", answer: false },
    ], [
        { Question: "Who's America's motorcycle brand?" },
        { choice: "Ducati", answer: false },
        { choice: "Yamaha", answer: false },
        { choice: "Harley Davidson", answer: true },
        { choice: "Ural", answer: false },
    ], [

        { Question: "Which of these brands doesn't run on marinara sauce?" },
        { choice: "Ducati", answer: false },
        { choice: "Bimota", answer: false },
        { choice: "Aprilia", answer: false },
        { choice: "Bajaj", answer: true },
    ]
]


//Globally scoped variables
var questionBlk = document.getElementById('questionBlk')
var startBtn = document.getElementById('startbtn')
var questionIndex = 0;
// necessary to globally alter time remaining if answer is incorrect
var secondsLeft = 100;
var yourTime = 0;
var nameInputField = document.getElementById('nameInput')

//Highscores Box Variables
var highScoresBtn = document.getElementById('highScoresBtn')
highScoresBtn.addEventListener('click', viewScores)
var highScoresBox = document.getElementById('highScoresBox')


function viewScores() {
    var quizCont = document.getElementById('quizContainer')
    if (highScoresBox.style.display === "none") {
        quizCont.style.display = "none"
        highScoresBox.style.display = "initial";
    } else {
        highScoresBox.style.display = "none"
        quizCont.style.display = "initial"
    }
}

// Quiz Timer function
var quizTimer = function () {
    var countDown = document.getElementById('countdown')
    var timerInterval = setInterval(function () {
        secondsLeft--;
        countDown.textContent = "Timer: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval)
            // Need to define rules here for ending quiz on running out of time.
        }
    }, 1000);
}

//Quiz Start
function startQuiz() {
    questionIndex = 0;
    ///These two lines remove Start button and Description
    startBtn.style.display = "none";
    document.getElementById('quizDescription').style.display = "none";
    quizTimer();
    presentQuestion(questionArray[questionIndex]);
    // temporary skip button to move between
    var skipBtn = document.createElement('button');
    skipBtn.textContent = " Skip ";
    document.querySelector('#sideRow').appendChild(skipBtn);
    skipBtn.addEventListener('click', reset)
}
// resets for next question object creation and checks for if quiz is completed
function reset() {
    var btnBlock = document.getElementById('btnBlock')
    while (btnBlock.hasChildNodes()) {
        btnBlock.removeChild(btnBlock.firstChild);
    }
    if (questionIndex === questionArray.length) {
        console.log(questionIndex, questionArray.length)
        quizOver();
    } else {
        console.log(questionIndex, questionArray.length)
        presentQuestion(questionArray[questionIndex])
    }
}
//displays view scores screen, reports your score and gives option to add your score to the list of scores
function quizOver() {
    yourTime = secondsLeft;
    alert('That\'s the end')
    viewScores();
    document.getElementById('results').textContent = "You finished with " + yourTime + " seconds remaining."
    document.getElementById('hsForm').style.display = "initial"
}
var submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', saveHighScore)

function saveHighScore(event) {
    event.preventDefault();
    var user = {
        Name: nameInputField.value,
        Score: yourTime
    };
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
}




// This block of code updates the question/heading block, takes in the Object names and creates buttons for each choice...
function presentQuestion(question) {
    console.log(questionIndex, questionArray.length)
    questionBlk.innerText = question[0].Question
    questionIndex++;
    // this loops through the remaining objects of the question arrary and creates a button for each one with it's string
    for (let i = 1; i < question.length; i++) {
        const element = question[i];
        var choiceBtn = document.createElement('button');
        // This line applies the string of text to the button
        choiceBtn.textContent = question[i].choice
        // These lines just style the button nicely
        choiceBtn.classList.add('btn')
        choiceBtn.classList.add('btn-primary')
        choiceBtn.classList.add('btn-sm')
        choiceBtn.classList.add('mybtn')
        //This line creates the button element
        document.getElementById('btnBlock').appendChild(choiceBtn)
        choiceBtn.addEventListener('click', checkChoice)
        if (question[i].answer)
            choiceBtn.dataset.answer = question[i].answer
    }
}
//Checks if there is a true dataset value applied
function checkChoice(param) {
    if (this.dataset.answer === "true") {
        console.log('it works')
        reset()
    } else {
        console.log('shit')
        secondsLeft = secondsLeft - 35
        reset()
    }
}

startBtn.addEventListener('click', startQuiz)




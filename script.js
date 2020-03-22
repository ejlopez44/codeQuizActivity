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
    ]]


//Globally scoped variables
var questionBlk = document.getElementById('questionBlk')
var startBtn = document.getElementById('startbtn')
var questionIndex = 0;
var currentScore = 0;
var highScores = {}

// Quiz Timer function

var quizTimer = function () {
    var countDown = document.getElementById('countdown')
    var secondsLeft = 100;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        countDown.textContent = "Timer: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval)
            // Need to define rules here for ending quiz on running out of time.
        }
    }, 1000);
}

//Quiz Starting version 1
// function startQuiz() {
//     ///These two lines remove Start button and Description
//     startBtn.style.display = "none";
//     document.getElementById('quizDescription').style.display = "none";
//     // This function calls the function that creates elements for Question and Button Choice elements
//     presentQuestion(questionArray[0]);
//     //This calls the timer function
//     quizTimer();
// }

//Quiz Start version 2 with loop
function nextQuestion() {
    presentQuestion(questionArray[questionIndex]);

    var skipBtn = document.createElement('button');
    skipBtn.textContent = " Skip ";
    document.querySelector('#sideRow').appendChild(skipBtn);
    skipBtn.addEventListener('click', skipToNext)
}

function startQuiz() {
    ///These two lines remove Start button and Description
    startBtn.style.display = "none";
    document.getElementById('quizDescription').style.display = "none";
    nextQuestion();
    //foreach loop that will allow quiz to transition through each question, IF receives a button input...?



    // This function calls the function that creates elements for Question and Button Choice elements

    //This calls the timer function
    quizTimer();
}

function reset() {
    var btnBlock = document.getElementById('btnBlock')
    while (btnBlock.hasChildNodes()) {
        btnBlock.removeChild(btnBlock.firstChild);
    }
}



// This block of code updates the question/heading block & takes in the Object names and creates buttons foreach choice...

function presentQuestion(question) {
    questionBlk.innerText = question[0].Question
    questionIndex++;
    // this loops through the remaining objects of the question arrary and creates a button for each one with it's string
    for (let i = 1; i < question.length; i++) {
        const element = question[i];
        var choiceBtn = document.createElement('button');
        // This line applies the string of text to the button
        choiceBtn.textContent = question[i].choice
        // This line is necessary to call if a button has a dataset entry
        choiceBtn.classList.add('btnVal')
        //This line creates the button element
        document.getElementById('btnBlock').appendChild(choiceBtn)
        if (question[i].answer)
            choiceBtn.dataset.answer = question[i].answer
    }
    // !!!!!! THIS NEEDS TO BE CODED
    //choiceBtn.addEventListener('click', checkChoice)
}

function skipToNext() {
    reset()
    presentQuestion(questionArray[questionIndex])
}

// function checkChoice(param) {
//     if ()
// }


//  each button needs a function that... 
//checks if true(correct) or false(wrong)
// moves you to the next question (re calls function for the next Question) 
// displays a message of the result. 
//Diminishes time on clock dependent on wrong answer.





//need to call presentQuestion and give it a parameter

startBtn.addEventListener('click', startQuiz)




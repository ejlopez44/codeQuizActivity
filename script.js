//Question Objects
var qOne = [
    { Question: "Who makes the best motorcycles?" },
    { choice: "USA", answer: false },
    { choice: "Germany", answer: false },
    { choice: "Italy", answer: true },
    { choice: "Japan", answer: false },
]
var qTwo = [
    { Question: "Who is the greatest racer of all time?" },
    { choice: "Marc Marquez", answer: false },
    { choice: "Valentino Rossi", answer: true },
    { choice: "Alvaro Bautista", answer: false },
    { choice: "Randy Depuniet", answer: false },
]
var qThree = [
    { Question: "Who's America's motorcycle brand?" },
    { choice: "Ducati", answer: false },
    { choice: "Yamaha", answer: false },
    { choice: "Harley Davidson", answer: true },
    { choice: "Ural", answer: false },
]
var qFour = [
    { Question: "Which of these brands doesn't run on marinara sauce?" },
    { choice: "Ducati", answer: false },
    { choice: "Bimota", answer: false },
    { choice: "Aprilia", answer: false },
    { choice: "Bajaj", answer: true },
]

//Globally scoped variables
var questionBlk = document.getElementById('questionBlk')
var startBtn = document.getElementById('startbtn')
var currentScore = ""
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

//This check function checks if the button choice selected is true or false and calls

function check() {

}

// This block of code updates the question/heading block & takes in the Object names and creates buttons foreach choice...
// This could be made into a For loop that creates each button element for each choice within the object. May need to change layout of the object..
function presentQuestion(question) {
    questionBlk.innerText = question[0].Question

    for (let i = 1; i < question.length; i++) {
        const element = question[i];
        var choiceBtn = document.createElement('button');
        choiceBtn.textContent = question[i].choice
        document.getElementById('btnBlock').appendChild(choiceBtn)


    }
    //previous way to generate
    // var choiceBtn1 = document.createElement('button');
    // choiceBtn1.textContent = question[1].choiceA
    // document.getElementById('btnBlock').appendChild(choiceBtn1)

    // var choiceBtn2 = document.createElement('button');
    // choiceBtn2.textContent = question.choiceB
    // document.getElementById('btnBlock').appendChild(choiceBtn2)


    // var choiceBtn3 = document.createElement('button');
    // choiceBtn3.textContent = question.choiceC
    // document.getElementById('btnBlock').appendChild(choiceBtn3)


    // var choiceBtn4 = document.createElement('button');
    // choiceBtn4.textContent = question.choiceD
    // document.getElementById('btnBlock').appendChild(choiceBtn4)


}
//  each button needs a function that... 
//checks if true(correct) or false(wrong)
// moves you to the next question (re calls function for the next Question) 
// displays a message of the result. 
//Diminishes time on clock dependent on wrong answer.





//need to call presentQuestion and give it a parameter

startBtn.addEventListener('click', startQuiz)




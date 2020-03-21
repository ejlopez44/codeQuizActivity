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

startQuizBtn.addEventListener('click', quizTimer)

var highScore = document.querySelector(".highScore");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var quizBoxQ = document.querySelector(".quiz-area");

var timerElement = document.querySelector(".timer-count");
var timerCount;
var timer;

var questions = ["What is your name?","How old are you?","What is your status?"]
var answers = ["Yel","45","Married"]
var multipleChoice = {
    name: ["Bob","Mike","Yel","John"],
    age: ["40","43","45","48"],
    stat: ["Single","Complicated","Seperated","Married"]
}


function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        // if (isWin && timerCount > 0) {
        //   // Clears interval and stops timer
        //   clearInterval(timer);
        //   winGame();
        console.log(timerCount);
        }
      
      // Tests if time has run out
    //   if (timerCount === 0) {
    //     // Clears interval
    //     clearInterval(timer);
    //     loseGame();
    //   }
    }, 1000);
  }

function startGame(){
    timerCount = 60;
    startTimer()   
}
startButton.addEventListener("click", startGame);
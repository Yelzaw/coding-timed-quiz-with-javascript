var highScore = document.querySelector(".highScore");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var quizBoxQ = document.querySelector(".quiz-area");

var timerElement = document.querySelector(".timer-count");
var timerCount;
var timer;

var questions = ["What is your name?","How old are you?","What is your status?"]
var answers = ["Yel","45","Married"]
const multipleChoice = {
    name: ["Bob","Mike","Yel","John"],
    age: ["40","43","45","48"],
    stat: ["Single","Complicated","Seperated","Married"]
}
var chosenQuestion="";

var listEl = document.createElement("ol");
var but1 = document.createElement("button")
var but2 = document.createElement("button")
var but3 = document.createElement("button")
var but4 = document.createElement("button")


function showQuizs() {
  chosenQuestion = questions[0];
  quizBoxQ.textContent = chosenQuestion;
  quizBoxQ.appendChild(listEl);
  listEl.appendChild(but1).textContent="1. "+multipleChoice["name"][0];
  listEl.appendChild(but2).textContent="2. "+multipleChoice["name"][1];
  listEl.appendChild(but3).textContent="3. "+multipleChoice["name"][2];
  listEl.appendChild(but4).textContent="4. "+multipleChoice["name"][3];
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
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        // loseGame();
      }
    }, 1000);
  }

function startGame(){
    timerCount = 50;
    startTimer()
    showQuizs()
}
startButton.addEventListener("click", startGame);
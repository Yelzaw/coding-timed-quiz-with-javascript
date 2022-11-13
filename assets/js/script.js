var highScore = document.querySelector(".highScore");
var startButton = document.querySelector(".start-button");

var quizQuest = document.querySelector(".quiz-area");

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
var listBtn = document.createElement("ol")
var but1 = document.createElement("button")
var but2 = document.createElement("button")
var but3 = document.createElement("button")
var but4 = document.createElement("button")

function btnFormat() {
  listBtn.setAttribute("style","width:100px; display:block; padding: 10px;text-align: left")  
}

function btnGroup() {  
  quizQuest.appendChild(listBtn);
  listBtn.appendChild(but1).textContent="1. "+multipleChoice["name"][0];
  listBtn.appendChild(but2).textContent="2. "+multipleChoice["name"][1];
  listBtn.appendChild(but3).textContent="3. "+multipleChoice["name"][2];
  listBtn.appendChild(but4).textContent="4. "+multipleChoice["name"][3];
}

function showQuizs() {
  chosenQuestion = questions[0];
  quizQuest.textContent = chosenQuestion;
  btnGroup()
  btnFormat()
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
    timerCount = 60;
    startTimer()
    showQuizs()
}
startButton.addEventListener("click", startGame);
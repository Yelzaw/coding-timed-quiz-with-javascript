var highScore = document.querySelector(".highScore");
var startButton = document.querySelector(".start-button");

var quizQuest = document.querySelector(".quiz-area");
var statmentOfanswer = document.querySelector(".statement");

var timerElement = document.querySelector(".timer-count");
var timerCount;
var timer;
var isWin = false;

var questions = ["What is your name?","How old are you?","What is your status?"]
var answers = ["Yel","45","Married"]
var typeOfquest = ["name","age","stat"]
const multipleChoice = {
    name: ["Bob","Mike","Yel","John"],
    age: ["40","43","45","48"],
    stat: ["Single","Complicated","Seperated","Married"]
}

var chosenQuestion="";
var correctAnswer;
var quesTion= 0;
var questionLength = 0;

var listBtn = document.createElement("label")
var but1 = document.createElement("button")
var but2 = document.createElement("button")
var but3 = document.createElement("button")
var but4 = document.createElement("button")
but1.id="but1";
but2.id="but2";
but3.id="but3";
but4.id="but4";

function btnFormat() {
  listBtn.setAttribute("style","width:100px; display:block; padding: 10px;text-align: left")  
}

function btnGroup0(list) {  
  quizQuest.appendChild(listBtn);
  listBtn.appendChild(but1).textContent="1. "+multipleChoice[list][0];
  listBtn.appendChild(but2).textContent="2. "+multipleChoice[list][1];
  listBtn.appendChild(but3).textContent="3. "+multipleChoice[list][2];
  listBtn.appendChild(but4).textContent="4. "+multipleChoice[list][3];  
}

function showQuizs0() {
  btnFormat()
  if (questionLength<=2){
    var j=questionLength;
    chosenQuestion = questions[j];
    correctAnswer = answers[j];
    quizQuest.textContent = chosenQuestion;
    quesTion = typeOfquest[j];    
  }
  else {
    return
  }
  btnGroup0(quesTion) 
}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // console.log(timerCount);
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
        }
      }
      // Tests if time has run out
      if (timerCount === 0 || questionLength==3) {
        // Clears interval
        clearInterval(timer);
        // loseGame();
        quizQuest.textContent="You made it.";
        statmentOfanswer.setAttribute("style","display:none")

      }
    }, 1000);
  }

function startGame(){
    timerCount = 60;
    startTimer()
    showQuizs0()
}

function checkAnswer(i){
  var isCorrect=false;
  if(multipleChoice[quesTion][i]===correctAnswer){
    console.log("You are correct.");
    statmentOfanswer.textContent="Correct";
    statmentOfanswer.setAttribute("style","display:flex")
    isCorrect=true;
  }
  else {
    console.log("Nice try, incorrect.");
    statmentOfanswer.textContent="Nice try, incorrect";
    statmentOfanswer.setAttribute("style","display:flex")
  };
  questionLength++;
  showQuizs0()
  // if (questionLengt<=3) {
  //   
  //   showQuizs0()
  // }
  // else {
  // quizQuest.textContent="You completed.";
  // }
}

function but1Button(){
  choseButton = 0;
  console.log(correctAnswer);
  console.log(quesTion);
  checkAnswer(choseButton)
}
function but2Button(){
  choseButton = 1;
  console.log(correctAnswer);
  console.log(quesTion);
  checkAnswer(choseButton)
}
function but3Button(){
  choseButton = 2;
  console.log(correctAnswer);
  console.log(quesTion);
  checkAnswer(choseButton)
}
function but4Button(){
  choseButton = 3;
  console.log(correctAnswer);
  console.log(quesTion);
  checkAnswer(choseButton)
}
startButton.addEventListener("click", startGame);
but1.addEventListener("click",but1Button);
but2.addEventListener("click",but2Button);
but3.addEventListener("click",but3Button);
but4.addEventListener("click",but4Button);

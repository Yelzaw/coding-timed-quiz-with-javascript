var highScore = document.querySelector(".highScore");
var startButton = document.querySelector(".start-button");
var header=document.querySelector("header");

var initalState = document.getElementById("initial-state"); 
var quizQuest = document.querySelector(".quiz-state")//
var statmentOfanswer = document.querySelector(".statement");//

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

var winCount=0;

var listBtn = document.createElement("label")
var but1 = document.createElement("button")
var but2 = document.createElement("button")
var but3 = document.createElement("button")
var but4 = document.createElement("button")

function btnFormat() {
  but1.setAttribute("style","width:auto; margin:10px; display:block; text-align: left");
  but2.setAttribute("style","width:auto; margin:10px; display:block; text-align: left");
  but3.setAttribute("style","width:auto; margin:10px; display:block; text-align: left");
  but4.setAttribute("style","width:auto; margin:10px; display:block; text-align: left"); 
}

function btnGroup0(list) {  
  quizQuest.appendChild(listBtn);
  listBtn.appendChild(but1).textContent="1. "+multipleChoice[list][0];
  listBtn.appendChild(but2).textContent="2. "+multipleChoice[list][1];
  listBtn.appendChild(but3).textContent="3. "+multipleChoice[list][2];
  listBtn.appendChild(but4).textContent="4. "+multipleChoice[list][3];  
}

function showQuizs() {
  btnFormat()
  if (questionLength<=2){
    var j=questionLength;
    chosenQuestion = questions[j];
    correctAnswer = answers[j];
    quizQuest.textContent = chosenQuestion;
    quesTion = typeOfquest[j];    
  }
  btnGroup0(quesTion)
}


function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          winCount++;
          console.log(winCount);
        }
      }
      // Tests if time has run out
      
      if (timerCount === 0 || questionLength==3) {
        // Clears interval
        clearInterval(timer);
        // EndGame;
        if (timerCount ===0){
          quizQuest.textContent="Sorry, Time up!";
        }
        else {
          quizQuest.textContent="You answered all questions. Awesome!";
        }
        
        header.setAttribute("style","display:none")
        statmentOfanswer.setAttribute("style","display:none")

        var timerCount2 = 10;
        var timer2 = setInterval(function(){
            timerCount2--;
            if (timerCount2 === 0) {
            clearInterval(timer2);
            checkScore()
            }
        },100);
      }
    }, 1000);
  }

function startGame(){
    timerCount = 60;
    startTimer()
    showQuizs()    
}

function checkScore(){
  quizQuest.textContent="Your score is " + winCount+".";
  localStorage.setItem("winCounter", winCount);
}

function recordHigh() {
  
}
function checkAnswer(i){
    
  if(multipleChoice[quesTion][i]===correctAnswer){
    console.log("You are correct.");
    statmentOfanswer.textContent="Correct";
    statmentOfanswer.setAttribute("style","display:flex")
    isCorrect=true;
    winCount = winCount+10;
  }
  else {
    console.log("Nice try, incorrect.");
    statmentOfanswer.textContent="Nice try, incorrect";
    statmentOfanswer.setAttribute("style","display:flex")
    timerCount = timerCount-5;
    timerElement.textContent = timerCount;    
  };
  console.log(winCount);
  questionLength++;

  var timerCount2 = 3;
  var timer2 = setInterval(function(){
   timerCount2--;
   if (timerCount2 === 0) {
    clearInterval(timer2);
    showQuizs()
   }
  },100);
  
}

function but1Button(){
  choseButton = 0;
  console.log(correctAnswer);
  console.log(quesTion);
  checkAnswer(choseButton);
}
function but2Button(){
  choseButton = 1;
  console.log(correctAnswer);
  console.log(quesTion);
  checkAnswer(choseButton);
}
function but3Button(){
  choseButton = 2;
  console.log(correctAnswer);
  console.log(quesTion);
  checkAnswer(choseButton);
}
function but4Button(){
  choseButton = 3;
  console.log(correctAnswer);
  console.log(quesTion);
  checkAnswer(choseButton);
}
startButton.addEventListener("click", function(){
  initalState.setAttribute("style","display: none");
  startGame()
})
but1.addEventListener("click",but1Button);
but2.addEventListener("click",but2Button);
but3.addEventListener("click",but3Button);
but4.addEventListener("click",but4Button);

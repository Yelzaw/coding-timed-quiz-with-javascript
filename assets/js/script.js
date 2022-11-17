//declared connection between JS and HTML
var header=document.querySelector("header"); //connection to Header
var highScore = document.querySelector(".highscore");

// 1st step - to show Main Page
var timerElement = document.querySelector(".timer-count");
var initalState = document.getElementById("initial-state"); 
var startButton = document.querySelector(".start-button"); 
var timerCount=0;
var quizArea = document.querySelector(".quiz-area");
var quizState = document.querySelector(".quiz-state");
var inputNameForm = document.querySelector(".input-nameform");
var scoreBoard = document.querySelector(".score-board");

function init() {
  initalState.setAttribute("style","display:block");
  quizArea.setAttribute("style","display:none");
  quizState.setAttribute("style","display:none");
  scoreBoard.setAttribute("style","display:none");
  chosenQuestion="";
  correctAnswer;
  quesTion= 0;
  questionLength = 0;
  timerElement.textContent = 0;  
}

init();

// Link to Scoreboard by clicking View high scores
highScore.addEventListener("click",recordSave);

function recordSave(event){
  initalState.setAttribute("style","display: none");
  header.setAttribute("style","display:none");
  scoreBoard.setAttribute("style","display: block");
  var getLastScore=JSON.parse(localStorage.getItem("Highestscore"));
  if (getLastScore!==null){
    showScore.textContent = getLastScore.join(" ");
    } else {
      return;
    }
}

// 2nd step - start the Q & A section and show the time countdown


var codeQuestions = document.getElementById("quiz-questions");
var chosenQuestion="";
var correctAnswer;
var quesTion= 0;
var questionLength = 0;
var winCount=0;
var compareWin=0;

// Question and Answer
var questions = ["Commonly used data types DO NOT include:","The condition in an if / else statement is enclosed with _____.","Arrays in JavaScript can be used to store ______.","String values must be enclosed within ____ when being assigned to variables.","A very useful tool used during development and debugging for printing content to the debugger is:"]
var answers = ["3. alerts","3. parenthesis","4. all of the above","3. quotes","4. console.log"]
var typeOfquest = ["first","second","third","fourth","fifth"]
const multipleChoice = {
    first: ["1. strings","2. booleans","3. alerts","4. numbers"],
    second: ["1. quotes","2. curly brackets","3. parenthesis","4. square brackets"],
    third: ["1. numbers and strings","2. other arrays","3. booleans","4. all of the above"],
    fourth:["1. commas","2. curly brackets","3. quotes","4. parenthesis"],
    fifth:["1. JavaScript","2. terminal/bash","3. for loops","4. console.log"]
}

startButton.addEventListener("click", function(){
  initalState.setAttribute("style","display: none");
  quizArea.setAttribute("style","display: block");
  highScore.setAttribute("style","display: none");
  startGame()
});

function startGame(){
  timerCount = 60;
  timerElement.textContent = timerCount;
  startTimer()
  showQuizs()    
}

function showQuizs() {    
  if (questionLength<=4){
    var j=questionLength;
    chosenQuestion = questions[j];
    correctAnswer = answers[j];
    codeQuestions.textContent = chosenQuestion;
    quesTion = typeOfquest[j];
  }
  btnGroup0(quesTion)
}

var but1 = document.getElementById("but-1");
var but2 = document.getElementById("but-2");
var but3 = document.getElementById("but-3");
var but4 = document.getElementById("but-4");

function btnGroup0(list) {  
  but1.textContent = multipleChoice[list][0];
  but2.textContent = multipleChoice[list][1];
  but3.textContent = multipleChoice[list][2];
  but4.textContent = multipleChoice[list][3];
}

// linked to statement section to show the response for the answer (correct or incorrect)

var responseAnswer = document.getElementById("response-answ");

// Clocking the time
var scoreState = document.getElementById("score-state");
var timer;
var isWin = false;

function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // If win condition is met, add the score
      if (isWin && timerCount > 0) {
        winCount++;
      }
    }
    // If timer or question has run out    
    if (timerCount === 0 || questionLength==5) {
      clearInterval(timer);
      quizArea.setAttribute("style","display: none");
      quizState.setAttribute("style","display:block");
      // EndGame;
      if (timerCount ===0){        
        scoreState.textContent="Sorry, Time up!";
      }
      else {        
        scoreState.textContent="You answered all the questions. Awesome!";
      };           
      responseAnswer.setAttribute("style","display:none")

      // let the page show a little while before change to another
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

// Function to check answer 

but1.addEventListener("click",but1Button);
but2.addEventListener("click",but2Button);
but3.addEventListener("click",but3Button);
but4.addEventListener("click",but4Button);

function but1Button(){ 
  choseButton = 0;
  checkAnswer(choseButton);
}
function but2Button(){
  choseButton = 1;
  checkAnswer(choseButton);
}
function but3Button(){
  choseButton = 2;
  checkAnswer(choseButton);
}
function but4Button(){
  choseButton = 3;
  checkAnswer(choseButton);
}

function checkAnswer(i){    
  if(multipleChoice[quesTion][i]===correctAnswer){
    responseAnswer.setAttribute("style","display:block");
    responseAnswer.textContent="Correct"; // response for correct answer
    var timerCount2 = 3;
    var timer2 = setInterval(function(){
    timerCount2--;
    if (timerCount2 === 0) {
    clearInterval(timer2);    
    responseAnswer.setAttribute("style","display:none"); // make it disappear that it will not confuse with coming up questions
      }
    },100);
    isCorrect=true;
    winCount = winCount+10; // if answer is correct, add 10 
  }
  else {
    responseAnswer.setAttribute("style","display:block");
    responseAnswer.textContent="Nice try, incorrect"; // response for incorrect answer
    var timerCount2 = 3;
    var timer2 = setInterval(function(){
    timerCount2--;
    if (timerCount2 === 0) {
    clearInterval(timer2);    
    responseAnswer.setAttribute("style","display:none");// hide it when another questions come up
      }
    },100);
    timerCount = timerCount-10; // if answer is wrong, deduct 10 sec    
  };
  questionLength++;
// a little time to read response before disappear
  var timerCount3 = 3;
  var timer3 = setInterval(function(){
   timerCount3--;
   if (timerCount3 === 0) {
    clearInterval(timer3);
    showQuizs()
   }
  },100);
  
}

// 3. Display the total scores and text-box for user to record the name
var textInputBox = document.createElement("input","type=text");
var inputText = "";
var saveButton = document.createElement("button");

function checkScore(){  
  scoreState.textContent="Your score is " + winCount+".";  
  var labelBox = document.createElement("form");
  labelBox.textContent="Enter initials  :  ";
  labelBox.setAttribute = ("style","font-size:small");  
  quizState.appendChild(labelBox);
  labelBox.appendChild(textInputBox);
  saveButton.textContent="Save";
  quizState.appendChild(saveButton);  
}

saveButton.addEventListener("click",function(){
  inputText = textInputBox.value;
  if (inputText === "") {
    return;
  }  
  setListBoard();
});

function setListBoard(){  
  var highScoreName = ["1. "+inputText,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",winCount];
  localStorage.setItem("Highestscore", JSON.stringify(highScoreName));
  recordHigh()
  textInputBox.value="";
  quizState.setAttribute("style","display:none");
}

// 4. Show the name and the score of user

var showScore = document.getElementById("show-scores");
var backButn = document.getElementById("back");
var resetButton = document.getElementById("reset");

function recordHigh () {
  header.setAttribute("style","display:none")
  scoreBoard.setAttribute("style","display:block");
  var getLastScore=JSON.parse(localStorage.getItem("Highestscore"));
  if (getLastScore!==null){
  showScore.textContent = getLastScore.join(" ");
  }
}

// Back to main page
backButn.addEventListener("click",function(){  
  init()
  header.setAttribute("style","display:flex");
  highScore.setAttribute("style","display: block");
  scoreBoard.setAttribute("style","display: none");  
});

// Reset button to clear the score
function resetScore() {
  winCount = 0;
  inputText ="";
  localStorage.setItem("Highestscore", JSON.stringify([]));
  recordHigh()  
}

resetButton.addEventListener("click", resetScore);

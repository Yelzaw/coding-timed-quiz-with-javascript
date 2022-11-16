//declared connection between JS and HTML
var header=document.querySelector("header"); //connection to Header
var highScore = document.querySelector(".highscore");

// 1st step - to show Main Page
var timerElement = document.querySelector(".timer-count");
var initalState = document.getElementById("initial-state"); 
var startButton = document.querySelector(".start-button"); 
var timerCount=0;

function init() {
  initalState.setAttribute("style","display:block");
  chosenQuestion="";
  correctAnswer;
  quesTion= 0;
  questionLength = 0;
  compareWin =winCount;
  timerElement.textContent = 0;
}

init();

// Link to Scoreboard by clicking View high scores

highScore.addEventListener("click",function(){
  initalState.setAttribute("style","display: none");
  header.setAttribute("style","display:none");
  scoreBoard.setAttribute("style","display: block");
  var getLastScore=JSON.parse(localStorage.getItem("Highestscore"));
  if (getLastScore!==null){
    showScore.textContent = getLastScore.join(" ");
    } else {
      return;
    }
})

// 2nd step - start the Q & A section and show the time countdown

var quizArea = document.querySelector(".quiz-area");
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
  quizQuest.setAttribute("style","display:block");
  startGame()
});

function startGame(){
  timerCount = 60;
  timerElement.textContent = timerCount;
  startTimer()
  showQuizs()    
}

function showQuizs() {  
  btnFormat()
  if (questionLength<=4){
    var j=questionLength;
    chosenQuestion = questions[j];
    correctAnswer = answers[j];
    quizQuest.textContent = chosenQuestion;
    quesTion = typeOfquest[j];
  }
  btnGroup0(quesTion)
}

// Buttons for Multiple Answers

var listBtn = document.createElement("label")
var but1 = document.createElement("button")
var but2 = document.createElement("button")
var but3 = document.createElement("button")
var but4 = document.createElement("button")

function btnFormat() {
  listBtn.setAttribute("style","display: block");
  but1.setAttribute("style","width:auto; margin:10px; display:block; text-align: left");
  but2.setAttribute("style","width:auto; margin:10px; display:block; text-align: left");
  but3.setAttribute("style","width:auto; margin:10px; display:block; text-align: left");
  but4.setAttribute("style","width:auto; margin:10px; display:block; text-align: left"); 
}

function btnGroup0(list) {  
  quizQuest.appendChild(listBtn);
  listBtn.appendChild(but1).textContent=multipleChoice[list][0];
  listBtn.appendChild(but2).textContent=multipleChoice[list][1];
  listBtn.appendChild(but3).textContent=multipleChoice[list][2];
  listBtn.appendChild(but4).textContent=multipleChoice[list][3];  
}

// linked to statement section to show the response for the answer (correct or incorrect)
var statmentOfanswer = document.querySelector(".statement");

// Clocking the time

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
      // EndGame;
      if (timerCount ===0){
        quizQuest.setAttribute("style","display: none");
        quizArea.setAttribute("style","display:block");
        quizArea.textContent="Sorry, Time up!";
      }
      else {
        quizQuest.setAttribute("style","display: none");
        quizArea.setAttribute("style","display:block");
        quizArea.textContent="You answered all the questions. Awesome!";
      };           
      statmentOfanswer.setAttribute("style","display:none")
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
    statmentOfanswer.textContent="Correct"; // response fo correct answer
    statmentOfanswer.setAttribute("style","display:flex")
    var timerCount2 = 3;
    var timer2 = setInterval(function(){
    timerCount2--;
    if (timerCount2 === 0) {
    clearInterval(timer2);    
    statmentOfanswer.setAttribute("style","display:none")
      }
    },100);
    isCorrect=true;
    winCount = winCount+10; // if answer is correct, add 10 
  }
  else {
    statmentOfanswer.textContent="Nice try, incorrect"; // response for incorrect answer
    statmentOfanswer.setAttribute("style","display:flex")
    var timerCount2 = 3;
    var timer2 = setInterval(function(){
    timerCount2--;
    if (timerCount2 === 0) {
    clearInterval(timer2);    
    statmentOfanswer.setAttribute("style","display:none")
      }
    },100);
    timerCount = timerCount-10; // if answer is wrong, deduct 10 sec
    timerElement.textContent = timerCount;    
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

var quizQuest = document.querySelector(".quiz-state");
var textInputBox = document.createElement("input","type=text");
var inputText = "";
var saveButton = document.createElement("button");

function checkScore(){  
  quizArea.textContent="Your score is " + winCount+".";  
  var labelBox = document.createElement("form");
  labelBox.textContent="Enter initials  :  ";
  labelBox.setAttribute = ("style","font-size:small");  
  quizArea.appendChild(labelBox);
  labelBox.appendChild(textInputBox);
  saveButton.textContent="Save";
  quizArea.appendChild(saveButton);  
}

saveButton.addEventListener("click",function(){
  inputText = textInputBox.value.trim();
  if (inputText === "") {
    return;
  }
  setListBoard();
});

function setListBoard(){
  quizArea.setAttribute("style","display:none");
  var highScoreName = ["1. "+inputText,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",winCount];
  localStorage.setItem("Highestscore", JSON.stringify(highScoreName));
  recordHigh()
  textInputBox.value="";
}

// 4. Show the name and the score of user

var scoreBoard=document.querySelector(".score-board");

var subTitle = document.getElementById("title-scoreboard");
var showScore = document.getElementById("show-scores");
var backButn = document.getElementById("back");
var resetButton = document.getElementById("reset");

function recordHigh() {
  header.setAttribute("style","display:none")
  scoreBoard.setAttribute("style","display: block");
  var getLastScore=JSON.parse(localStorage.getItem("Highestscore"));
  if (getLastScore!==null){
  showScore.textContent = getLastScore.join(" ");
  } else {
    return;
  }
}

// Back to main page
backButn.addEventListener("click",function(){  
  init()
  header.setAttribute("style","display:flex");
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

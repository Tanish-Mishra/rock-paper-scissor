const choices = ["rock", "paper", "scissors"];
//  Computer Random Picker Logic

// User Score and Computer Score logic and Incrementation

let userScore = 0;
function changeUserScore(userScore) {
  document.getElementById("p_score").innerHTML = userScore;
}
let pcScore = 0;
function changePcScore(pcScore) {
  document.getElementById("c_score").innerHTML = pcScore;
}

// Intial id's picker of user rock paper scissor

let userRock = document.getElementById("user_rock");
let userScissor = document.getElementById("user_scissor");
let userPaper = document.getElementById("user_paper");

// let pc pick the choice
let pc;

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// container selector for game one and game two
let gameOne = document.getElementById("gameOne");
let gameTwo = document.getElementById("gameTwo");
// Button Selectors
let playAgain = document.getElementById("play_again");
let nextbtn = document.getElementById("next_btn");

//    id selector for win lose tie
let result_text = document.getElementById("result_text");
// Win Lose Tie function
function win() {
  result_text.innerHTML = "You Win";
  playAgain.innerHTML = "Play Again";
}
function lose() {
  result_text.innerHTML = "You Lose";
  playAgain.innerHTML = "Play Again";
}
function tie() {
  result_text.innerHTML = "Tie";
  playAgain.innerHTML = "Replay";
}
// after click function to start game two

function startGameTwo() {
  gameOne.classList.add("hidden");
  gameTwo.classList.remove("hidden");
}
//  setTimeout(()=>{
//     gameOne.classList.add('hidden');
//     gameTwo.classList.remove('hidden');
//  },1000)

// class Selector for user and pc for game two to change buttons
// user
const userPaperStyle = document.getElementById("gameTwoPaper");
const userRockStyle = document.getElementById("gameTwoRock");
const userScissorStyle = document.getElementById("gameTwoScissor");

// class selector for user for game two to change buttons
// pc
let pcPaperStyle = document.getElementById("pc_paper");
let pcRockStyle = document.getElementById("pc_rock");
let pcScissorStyle = document.getElementById("pc_scissor");

// Game Logic
playAgain.addEventListener("click", () => {
  gameOne.classList.remove("hidden");
  gameTwo.classList.add("hidden");
  nextBtnHidden();
});

userRock.addEventListener("click", function () {
  startGameTwo();
  pc = computerPlay();
  if (pc === "rock") {
    tie();
  } else if (pc === "paper") {
    lose();
    pcScore++;
    changePcScore(pcScore);
  } else {
    win();
    userScore++;
    changeUserScore(userScore);
  }
  nextBtnVisible();
});

userPaper.addEventListener("click", () => {
  startGameTwo();
  pc = computerPlay();
  if (pc === "rock") {
    win();
    userScore++;
    changeUserScore(userScore);
  } else if (pc == "paper") {
    tie();
  } else {
    lose();
    pcScore++;
    changePcScore(pcScore);
  }
  nextBtnVisible();
});

userScissor.addEventListener("click", () => {
  startGameTwo();
  pc = computerPlay();
  if (pc === "rock") {
    lose();
    pcScore++;
    changePcScore(pcScore);
  } else if (pc == "paper") {
    win();
    userScore++;
    changeUserScore(userScore);
  } else {
    tie();
  }
  nextBtnVisible();
});

// container one and two selector
const contOne = document.querySelector(".container_one");
const contTwo = document.querySelector(".container_two");

//  Next Button Win Logic

// next button visible Logic
function nextBtnVisible() {
  if (userScore > pcScore) {
    nextbtn.classList.remove("win_btn");
  } else if (userScore < pcScore) {
    nextbtn.classList.add("win_btn");
  }
}

nextbtn.addEventListener("click", () => {
  contOne.classList.add("hidden");
  contTwo.classList.remove("hidden");
  nextbtn.classList.add("win_btn");
  document.querySelector(".btn_style").classList.add("newindex"); // for rules css
  document.querySelector(".rules").classList.add("newpage"); // for rules css
  hideRules();
});
// reload page using the play again button

// Game Reload function
function gameReload() {
  userScore = 0;
  pcScore = 0;
  changeUserScore(userScore);
  contOne.classList.remove("hidden");
  contTwo.classList.add("hidden");
  gameOne.classList.remove("hidden");
  gameTwo.classList.add("hidden");
  nextbtn.classList.add("win_btn");
  document.querySelector(".btn_style").classList.remove("newindex"); // for rules css
  document.querySelector(".rules").classList.remove("newpage"); // for rules css
  hideRules();
  changePcScore(pcScore);
  gameReload();
}

const reloadBtn = document.getElementById("reload_page_btn");
reloadBtn.addEventListener("click", gameReload);

//  Rules Logic
let rules = document.querySelector(".rules_btn");
let closeRules = document.querySelector(".close_btn");
function showRules() {
  document.querySelector(".rules").classList.toggle("rules_active");
}
function hideRules() {
  document.querySelector(".rules").classList.remove("rules_active");
}
rules.addEventListener("click", showRules);
closeRules.addEventListener("click", hideRules);

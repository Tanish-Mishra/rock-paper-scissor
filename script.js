const choices = ["rock","paper","scissors"];
                //  Computer Random Picker Logic

// User Score and Computer Score logic and Incrementation

let userScore = 0;
function changeUserScore(userScore) {
    document.getElementById('p_score').innerHTML = userScore;
}
let pcScore = 0;
function changePcScore(pcScore) {
    document.getElementById('c_score').innerHTML = pcScore;
}

// Intial id's picker of user rock paper scissor

let userRock = document.getElementById('user_rock');
let userScissor = document.getElementById('user_scissor');
let userPaper = document.getElementById('user_paper');

// let pc pick the choice 
let pc;

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
  }


// container selector for game one and game two 
let gameOne = document.getElementById('gameOne');
let gameTwo = document.getElementById('gameTwo');
// Button Selectors 
let playAgain = document.getElementById('play_again');
let nextbtn = document.getElementById('next_btn');

  
//    id selector for win lose tie
let result_text = document.getElementById('result_text');
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
    gameOne.classList.add('hidden');
    gameTwo.classList.remove('hidden');
 }
//  setTimeout(()=>{
//     gameOne.classList.add('hidden');
//     gameTwo.classList.remove('hidden');
//  },1000)

// class Selector for user and pc for game two 
 
// class selector for user for game two

// let userPaperStyle = document.getElementById('gameOnePaper');
// let userRockStyle = document.getElementById('gameOneRock');
// let userScissorStyle = document.getElementById('gameOneScissor');

// class selector for pc for game two
//  let pcPaperStyle = document.getElementById('pc_paper');
//  let pcRockStyle = document.getElementById('pc_rock');
//  let pcScissorStyle = document.getElementById('pc_scissor');
  // Game Logic 
 playAgain.addEventListener('click',() => {
           gameOne.classList.remove('hidden');
           gameTwo.classList.add('hidden');
           nextBtnHidden();
 });

  userRock.addEventListener('click',function() {
       startGameTwo();
       pc = computerPlay();
    if(pc==="rock") {
        pcPaperStyle.classList.add('hidden');
        pcScissorStyle.classList.add('hidden');
        tie();
    } else if(pc==="paper") {
        pcRockStyle.classList.add('hidden');
        pcScissorStyle.classList.add('hidden');
        lose();
        pcScore++;
        changePcScore(pcScore);
    } else {
        pcPaperStyle.classList.add('hidden');
        pcRockStyle.classList.add('hidden');
        win();
        userScore++;
        changeUserScore(userScore);
    }
  });


  userPaper.addEventListener('click',() => {
          startGameTwo();
          pc = computerPlay();
    if(pc==="rock") {
        win();
        userScore++;
        changeUserScore(userScore);
    } else if (pc=="paper") {
          tie();
    } else {
        lose();
        pcScore++;
        changePcScore(pcScore);
    }
  });

    userScissor.addEventListener('click',() => {  
         startGameTwo();
         pc = computerPlay();
         if(pc==="rock") {
            lose();
            pcScore++;
           changePcScore(pcScore);
        } else if (pc=="paper") {
              win();
              userScore++;
              changeUserScore(userScore);
        } else {
            tie();
        }
      });

       // next button visible 
function nextBtnVisible() {
    nextbtn.classList.remove('hidden');
}
function nextBtnHidden() {
  nextbtn.classList.add('hidden');
}
             //  Rules Logic 
let rules = document.querySelector('.rules_btn');
let closeRules = document.querySelector('.close_btn');
function showRules() {
   document.querySelector('.rules').classList.toggle('rules_active');
}
function hideRules() {
    document.querySelector('.rules').classList.remove('rules_active');
}
rules.addEventListener('click',showRules);
closeRules.addEventListener('click',hideRules);
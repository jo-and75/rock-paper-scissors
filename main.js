console.log("Welcome, 🤘📄✂️")  

let humanTotal;
let computerTotal; 

let humanScore = 0; 
let computerScore = 0;   
let roundsPlayed = 0;

const buttons = document.querySelectorAll("button"); 
let humanSelection;   
let computerSelection;
  
let scores = document.getElementById("scores"); 
scores.setAttribute("style","display:flex; gap:50px; margin:10px 0;")

const results = document.getElementById("results");  
results.setAttribute("style","margin: 10px 0" )   

const yourScore = document.getElementById("your-score");   
const aiScore = document.getElementById("computer-score");   
const finalResults = document.getElementById("final-results");  
const restartGame = document.getElementById("restart-game");   


function again() { 
    window.location.reload();
}

restartGame.addEventListener("click", again);

function playRoundsLogic(event) {   
    roundsPlayed++; 
    const clickedButton = event.target
    humanSelection = clickedButton.textContent 
    computerSelection = ["rock","paper","scissors"][Math.floor(Math.random()*3)];    
    //on each click, computerSelection randomizes, fixes the issue of not being able to click buttons consecutively.  
    playRound(humanSelection);   
   
    if (roundsPlayed >= 5) { 
        buttons.forEach(button => {
            button.removeEventListener("click", playRoundsLogic); 
            button.disabled = true;  

            if(humanTotal > computerTotal){ 
                finalResults.textContent = "Final Scores: YOU ARE THE WINNER ! 🎉"; 
            }else if(humanTotal == computerTotal){ 
                finalResults.textContent = "Final Scores: YOU TIED, WHICH ISN'T TOO SHABBY";    
            }else if(humanTotal > computerTotal){ 
                finalResults.textContent = "Final Scores: FUNFORTUNATELY, YOU LOST 😔";
            }
        });    
    }

    
}


buttons.forEach((button) => { 
    button.addEventListener("click", playRoundsLogic); 
}); 


        
    function playRound(humanSelection){   

            if(humanSelection == computerSelection){ 
                results.textContent = "Results: It's a tie. Both chose"+ " "+ humanSelection; 
            }else if(humanSelection == "rock" && computerSelection == "scissors"||
            humanSelection == "scissors" && computerSelection == "paper"||
            humanSelection == "paper" && computerSelection == "rock"){    
                results.textContent = "Results: You Win!!!" + " " + humanSelection + " " + "beats" + " " + computerSelection + ".";   
                ++humanScore;
            }else if(computerSelection == "rock" && humanSelection == "scissors"||
            computerSelection == "scissors" && humanSelection == "paper"||
            computerSelection == "paper" && humanSelection == "rock"){    
                results.textContent = "Results: You lose!" + " " + computerSelection + " " + "beats" + " " + humanSelection + ".";   
                ++computerScore; 
            }            

            humanTotal = humanScore; 
            computerTotal = computerScore; 
    
            yourScore.textContent = "Your Score: " + humanScore;
            aiScore.textContent = "Computer Score: " + computerScore;
    }  
    
    


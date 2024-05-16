console.log("Welcome, 🤘📄✂️") 
 
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

const finalResults = document.getElementById("final-results"); 


buttons.forEach((button) => { 
    button.addEventListener("click", () => { 
        humanSelection = button.textContent  
        computerSelection = ["rock","paper","scissors"][Math.floor(Math.random()*3)];    
        //on each click, computerSelection randomizes, fixes the issue of not being able to click buttons consecutively.  

        if(roundsPlayed >5){ 
    
        }

        playRound(humanSelection);   
        roundsPlayed++
    });
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
    }  
        
            


/*
if(humanTotal > computerTotal){ 
    console.log("You Win!!" + " " + "Your Score:" + " " + humanTotal + " " + "&" + "Computer Score:" + " " + computerTotal); 
}else if(humanTotal == computerTotal){ 
    console.log ("You tied, not bad" + " " + "Your Score:" + " " + humanTotal + " " + "&" + " " + "Computer Score:" + " " + computerTotal);    
}else if(humanTotal > computerTotal){ 
    console.log("You Lose 😞"+ " " + "Your Score:" + " " + humanTotal + " " + "&" + " " + "Computer Score:" + " " + computerTotal);
}   //Added after playGame is called so it doesn't appear after each round 
*/
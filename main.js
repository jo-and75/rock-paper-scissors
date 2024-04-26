console.log("Welcome, 🤘📄✂️") 


let getComputerChoice = ["rock","paper","scissors"][Math.floor(Math.random()*3)];

let getHumanChoice = prompt("Please select either rock, paper, or scissors. 🤘📄✂️").toLowerCase();
    switch(getHumanChoice){ 
        case "rock": 
        break; 

        case "paper":  
        break;  

        case "scissors":  
        break;   
    }

let humanScore = 0; 
let computerScore = 0; 

function playRound(humanChoice,computerChoice){  
    if(humanSelection == "rock" && computerSelection == "rock"||humanSelection == "paper" && computerSelection == "paper"||humanSelection == "scissors" && computerSelection == "scissors"){ 
        console.log("It's a tie. Both chose"+ " "+ humanSelection); 
    }else if(humanSelection == "rock" && computerSelection == "scissors"||humanSelection == "scissors" && computerSelection == "paper"||humanSelection == "paper" && computerSelection == "rock"){    
        console.log("You Win!!!" + " " + humanSelection + " " + "beats" + " " + computerSelection + "."); 
        console.log("Your Score:" + " " + ++humanScore + " " + "&" + " " + "Computer Score:"+ " "+ computerScore);   
    }else if(humanSelection.toLowerCase !== "rock"||humanSelection.toLowerCase !=="paper"||humanSelection.toLowerCase !== "scissors"){
        console.log("Warning: The provided response is not valid. Please ensure your input adheres to the expected format or guidelines. 🚫🔍") 
    }else{    
        console.log("You lose!" + " " + computerSelection + " " + "beats" + " " + humanSelection + "."); 
        console.log("Computer Score:" + " " + ++computerScore + " " + "&" + " " + "Your Score:"+ " "+ humanScore); 
    }   
} 
  
const humanSelection = getHumanChoice; 
const computerSelection = getComputerChoice; 

playRound(humanSelection,computerSelection);  

function playGame(){     

    let humanScore = 0; 
    let computerScore = 0; 

    function playRound(humanChoice,computerChoice){  
        if(humanSelection == "rock" && computerSelection == "rock"||humanSelection == "paper" && computerSelection == "paper"||humanSelection == "scissors" && computerSelection == "scissors"){ 
            console.log("It's a tie, play again"); 
        }else if(humanSelection == "rock" && computerSelection == "scissors"||humanSelection == "scissors" && computerSelection == "paper"||humanSelection == "paper" && computerSelection == "rock"){    
            console.log("You Win!!!" + " " + humanSelection + " " + "beats" + " " + computerSelection + "."); 
            console.log("Your Score:" + " " + ++humanScore + " " + "&" + " " + "Computer Score:"+ " "+ computerScore);   
        }else{  
            console.log("You lose!" + " " + computerSelection + " " + "beats" + " " + humanSelection + "."); 
            console.log("Computer Score:" + " " + ++computerScore + " " + "&" + " " + "Your Score:"+ " "+ humanScore); 
        }   
    }    
} 


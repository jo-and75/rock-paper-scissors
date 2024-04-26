console.log("Welcome, 🤘📄✂️") 
 
let humanScore = 0; 
let computerScore = 0;

let playGame = function(rounds){  //rounds is a parameter for playGame  

    for(let i = 0; i < rounds; i++){ 
        const humanSelection = prompt("Please select either rock, paper, or scissors. 🤘📄✂️").toLowerCase();
        //Was declared in loop to bring up the prompt after each round
        const computerSelection = ["rock","paper","scissors"][Math.floor(Math.random()*3)];   
        //Declared in loop so it generates new string after each round
        playRound(humanSelection,computerSelection); 
        } 
    
    function playRound(humanSelection,computerSelection){   

        if(humanSelection === computerSelection){ 
        console.log("It's a tie. Both chose"+ " "+ humanSelection); 
        }else if(humanSelection == "rock" && computerSelection == "scissors"||
        humanSelection == "scissors" && computerSelection == "paper"||
        humanSelection == "paper" && computerSelection == "rock"){    
            console.log("You Win!!!" + " " + humanSelection + " " + "beats" + " " + computerSelection + "."); 
            console.log("Your Score:" + " " + ++humanScore + " " + "&" + " " + "Computer Score:"+ " "+ computerScore);   
        }else if(humanSelection.toLowerCase() !== "rock" && humanSelection.toLowerCase() !=="paper" && humanSelection.toLowerCase() !== "scissors"){
            console.log("Warning: The provided response is not valid. Please ensure your input adheres to the expected format or guidelines. 🚫🔍") 
        }else{    
            console.log("You lose!" + " " + computerSelection + " " + "beats" + " " + humanSelection + "."); 
            console.log("Computer Score:" + " " + ++computerScore + " " + "&" + " " + "Your Score:"+ " "+ humanScore); 
        }   
    }    
} 

playGame(5);

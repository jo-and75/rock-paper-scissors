console.log("Hello, World!") 


let getComputerChoice = ["rock","paper","scissors"][Math.floor(Math.random()*3)];

let getHumanChoice = prompt("Which weapon are you choosing today?").toLowerCase()
    switch(getHumanChoice){ 
        case "rock": 
        console.log(); 
        break; 

        case "paper": 
        console.log(); 
        break;  

        case "scissors": 
        console.log(); 
        break;  

        default: 
        console.log("This doesn't run"); 
    }


const humanSelection = getHumanChoice; 
const computerSelection = getComputerChoice; 



function playGame() { 

    let humanScore = 0; 
    let computerScore = 0; 
    
    function playRound(humanChoice,computerChoice){ 
        if(humanSelection > computerSelection) {   
            ++humanScore;
            console.log("You Win!!!" + " " + humanSelection + " " + "beats" + " " + computerSelection + ".");
        } else{  
            ++computerScore; 
            console.log("You lose!" + " " + computerSelection + " " + "beats" + " " + humanSelection + ".");
        }
    } 
    
    playRound(humanSelection,computerSelection);  

} 


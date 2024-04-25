console.log("Hello, World!") 


let getComputerChoice = ["rock","paper","scissors"][Math.floor(Math.random()*3)];

console.log(getComputerChoice); 

let getHumanChoice = prompt("Which weapon are you choosing today?") 
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

console.log(getHumanChoice);  

let humanScore = 0; 
let computerScore = 0;  
console.log(humanScore)
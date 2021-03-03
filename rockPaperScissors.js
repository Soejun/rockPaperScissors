//rockPaperscissors

function computerPlay(){
    //computer picks (randomly) between rock paper scissors
    let compChoices = ['Rock', 'Paper', 'Scissors']; //Creates an array of rock, paper, scissor choices
    let finChoice = Math.floor(Math.random() * compChoices.length);

    return compChoices[finChoice];
}

function userPlay(){
    //Gets user input from the user
    let playerChoice = window.prompt("Pick one: Rock, paper, or scissors?");
    return playerChoice;
}


function playGame(uTest1, uTest2){

    let player = uTest1.toUpperCase();
    let computer = uTest2.toUpperCase();


    if(player == computer){
        return `Tie!`;
    }else if(player == "SCISSORS" && computer == "ROCK"){
        return `You lose! Rock beats scissors!`;
    }else if(player == "ROCK" && computer =="SCISSORS"){
        return `You win! Rock beats scissors!`;
    }else if(player == "PAPER" && computer == "SCISSORS"){
        return `You lose! Scissors beats paper!`;
    }else if(player =="SCISSORS" && computer == "PAPER"){
        return `You win! Scissors beats paper!`;
    }else if(player == "ROCK" && computer == "PAPER"){
        return `You lose! Paper beats rock!`;
    }else if(player == "PAPER" && computer == "ROCK"){
        return `You win! Paper beats rock!`;
    

}
}
function game(){
    //Sets rounds of rock paper scissors and displays score of user and computer by the end of the game
    let roundsPlayed;
    let playerWin = 0;
    let computerWin = 0;
    let winLose;

    for(roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++){
        //console.log(playGame(userPlay(),computerPlay()));
        winLose = playGame(userPlay(),computerPlay());
        console.log(winLose);
     if(winLose.includes("win")){
            playerWin++;
        }else if(winLose.includes("lose")){
            computerWin++;
        }else{
            playerWin = playerWin;
            computerWin = computerWin;
        }
    }
    console.log(`Game over! Player: ${playerWin} Computer: ${computerWin}`);
    if(playerWin > computerWin){
        console.log("You win!");
    }else if(computerwin < playerWin){
        console.log("You lose!");
    }else{
        console.log("Tie!");        
    }
}
 

//console.log(computerPlay()); //Test to see if computerPlay works

//console.log(playGame(computerPlay(), userPlay()));

console.log(game());
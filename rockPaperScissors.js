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
        return `Tie! ${player} is the same as ${computer}.`
    }

}
//console.log(computerPlay()); //Test to see if computerPlay works

console.log(playGame(computerPlay(), userPlay()));
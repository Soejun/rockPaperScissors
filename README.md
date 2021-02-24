# rockPaperScissors
1. Understand
    - Create a text based game of rock paper scissors
    - You will play against a computer
    - Standard rules of rock paper scissors apply
2. Plan
    - Given three inputs (both player and computer): rock, paper scissors
    - Outcomes:
        - Scissor beats paper "You Lose! Scissor beats paper"
        - Paper beats Rock
        - Rock beats paper
        - Scissor = Scissor, Rock = Rock, Paper = Paper

    - Make inputs case insensitive:
        -Ex: "rock" == "ROCK" == "rOcK"

    -A single round of rock paper scissors
        -Simple
    -Also create an instance where five rounds are played, and the score is kept.
        - Report a winner and loser at the end
        - Also report # of rounds won/lost for both player an computer
    -3 Functions

2b. Required Functions per projet

    1. computerPlay
        - This is the function that makes the computer play
        - Returns rock, paper, or scissor
    2. A function that plays a single round of Rock Paper Scissors
        - Takes two parameters,the playerSelection and computerSelection
        -playerSelection: Rock, Paper, or Scissor
        -computerSelection: rock, Paper, or Scissor
        -Make case insensitive
        - function testFunction(playerSelection, computerselection){
            if playerSelection = Scissors and computerSelection = Paper
            return "You Win! Paper beats Scissors"

            else if playerSelection = Paper and computerSelection = Paper
            return "Tie!"

            else if playerSeletion = paper and computerSelection = scissors
            return "You Lose! scissors beats paper!"

        function game(){
            - Plays a five round game
            - Keeps score
            -Reports a winner or loser at end
            -two variables to keep score

        }

        3. Use prompt() to get input from user
        4. all functions subject to discretion, if more efficient way is found use that

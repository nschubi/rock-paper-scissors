let playerWon = 0;
let computerWon = 0;
let screen;

function computerPlay(){
    let arr = ["Rock", "Paper", "Scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}

function capitalize(word){
    let firstLetter = word.slice(0,1);
    let restOfWord = word.slice(1);
    return firstLetter.toUpperCase().concat(restOfWord.toLowerCase());
}

function playRound(playerSelection, computerSelection){
    console.log('call function playRound')
    let player = capitalize(playerSelection);

    if(player == computerSelection){
        return "It's a tie! You both choose " + computerSelection;
    }
    switch(player){
        case "Rock":
            if (computerSelection == "Paper"){
                return "You lose, Paper beats Rock!";
            }else{
                return "You win, Rock beats Scissors!";
            }
            break;
        case "Paper":
            if (computerSelection == "Scissors"){
                return "You lose, Scissors beats Paper!";
            }else{
                return "You win, Paper beats Rock!";
            }
            break;
        case "Scissors":
            if (computerSelection == "Rock"){
                return "You lose, Rock beats Scissors!";
            }else{
                return "You win, Scissors beats Paper!";
            }
            break;
        default:
            return "Error! No valid input was given. Input=" + playerSelection;
    }
}

function reset(){
    console.log('call function reset')
    playerWon = 0;
    computerWon = 0;
    screen = document.querySelector('#gameScreen');
    updateScore();
    while(screen.firstChild != undefined){
        screen.removeChild(screen.firstChild)
    }
}

function updateScore(){
    const scorePlayer = document.querySelector('#playerScore');
    const scoreComp = document.querySelector('#computerScore');
    scorePlayer.innerText = 'You: ' + playerWon;
    scoreComp.innerText = 'Computer: ' + computerWon;
    if(playerWon >= 5){
        alert("You won the game. The final score was: You " + playerWon + " : " + computerWon + " Computer");
        reset();
    }else if(computerWon >= 5){
        alert("You lost the game. The final score was: You " + playerWon + " : " + computerWon + " Computer");
        reset();
    }
}
/**
 * Start a game of RPS
 */
function game(){
    console.log('call function game')
    reset();
    const selectors = Array.from(document.querySelectorAll('button.selectionBtn'));
    selectors.forEach(selector => selector.addEventListener('click', function () {
        let result = playRound(selector.textContent, computerPlay());
        screen.appendChild(document.createTextNode(result))
        screen.appendChild(document.createElement('p'))
        if(result.includes("You win")){
            playerWon++;
            updateScore();
        }else if(result.includes("You lose")){
            computerWon++;
            updateScore();
        }
    }));
}


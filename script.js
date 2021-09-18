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

/**
 * Start a game of RPS with 5 rounds
 */
function game(){
    let playerWon = 0;
    let computerWon = 0;
    
    const screen = document.querySelector('#gameScreen');
    
    const selectors = Array.from(document.querySelectorAll('button.selectionBtn'));
    selectors.forEach(selector => selector.addEventListener('click', function () {
        let result = playRound(selector.innerHTML, computerPlay());
        if(result.includes("You win")){
            playerWon++;
        }else if(result.includes("You lose")){
            computerWon++;
        }
        screen.appendChild(document.createTextNode(result))
        screen.appendChild(document.createElement('p'))
    }));

    while(screen.firstChild != undefined){
        screen.removeChild(screen.firstChild)
    }

    console.log("You:" + playerWon + " Computer:" + computerWon);
    console.log("Game Over: " + (playerWon > computerWon ? "You win." : "You lose."));
}


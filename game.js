const CHOICES = [
    {
        name: 'rock',
        beats: 'scissors'
    },
    {
        name: 'paper',
        beats: 'rock'
    },
    {
        name: 'scissors',
        beats: 'paper'
    }
];

const choicesButtons = document.querySelectorAll('[data-choice]');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score'); 
const playerWins = document.querySelector('#player-wins');
const computerWins = document.querySelector('#computer-wins');

choicesButtons.forEach(choicesButtons => {
    choicesButtons.addEventListener('click', e => {
        let choiceName = choicesButtons.dataset.choice;
        let choiceObj = CHOICES.find(choice => choice.name == choiceName);
        playRound(choiceObj);
    });
});

function playRound(playerChoice) {
    let computerChoice = computerPlay();
    let result =  roundResult(playerChoice, computerChoice);
    switch(result) {
        case "TIE":
            break;
        case "WIN":
            addToCurrentScore(playerScore);
            break;
        case "DEFEAT":
            addToCurrentScore(computerScore);
            break;
        default:
            console.log("Potential problem");
    }
    checkWinner();
}

function computerPlay() {
    let randomChoice = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomChoice];
}

function roundResult (playerChoice, computerChoice) {
    if (!(playerChoice.name === computerChoice.name)) {
        if(playerChoice.beats === computerChoice.name) {
            return "WIN";
        }else {
            return "DEFEAT";
        }
    }else {
        return "TIE";
    }
}

function addToCurrentScore (span) {
    span.innerText = parseInt(span.innerText) + 1;
}

function checkWinner() {
    if(parseInt(playerScore.innerText) == 5) {
        playerScore.innerText = 0;
        computerScore.innerText = 0;
        playerWins.innerText = parseInt(playerWins.innerText) + 1;
    }
    if(parseInt(computerScore.innerText) == 5) {
        playerScore.innerText = 0;
        computerScore.innerText = 0;
        computerWins.innerText = parseInt(computerWins.innerText) + 1;
    }
}
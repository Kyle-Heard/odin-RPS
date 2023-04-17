

let wins = 0;
let losses = 0;
let gamesPlayed = 0;
let cpuWeapon;
let playerWeapon;


function generateCPU() {
    cpuWeapon = Math.ceil(Math.random() * 3);
    computerChoiceTxt.textContent = getWeaponName(cpuWeapon).toUpperCase();
    checkBattle();
}

function playerChoice() {
    weapon = this.classList[1];
    switch (weapon.toLowerCase()) {
        case "rock":
            playerWeapon = 1;
            break;
        case "paper":
            playerWeapon = 2;
            break;
        default:
            playerWeapon = 3;
    }
    playerChoiceTxt.textContent = weapon.toUpperCase();
    generateCPU();
}


function checkBattle() {
    let result;

    if (playerWeapon === cpuWeapon) {
        result = "Tie";
    } else if (playerWeapon - 1 === cpuWeapon || playerWeapon + 2 === cpuWeapon) {
        result = "Win";
        wins++;
    } else {
        result = "Lose"
        losses++;
    }

    displayChoices(result);
    gamesPlayed++;
    if (gamesPlayed >= 5) checkFullMatch();
}
function displayChoices(result) {
    console.log(`Player: ${getWeaponName(playerWeapon)} | CPU: ${getWeaponName(cpuWeapon)} || ${result}`)
    computerRecordTxt.textContent = losses;
    playerRecordTxt.textContent = wins;
}

function getWeaponName(weaponValue) {
    let name;
    switch (weaponValue) {
        case 1:
            name = "Rock";
            break;
        case 2:
            name = "Paper";
            break;
        default:
            name = "Scissors";
    }
    return name;
}

function checkFullMatch(){
    weaponButtons.forEach(btn => btn.removeEventListener('click', playerChoice));
    if (wins > losses) resultsTxt.textContent = `You Win! ${wins} - ${losses}`;
    else if (wins < losses) resultsTxt.textContent = `You Lose! ${wins} - ${losses}`;
    else resultsTxt.textContent = `You Tied! ${wins} - ${losses}`;
}

function resetGame(){
    weaponButtons.forEach(btn => btn.addEventListener('click', playerChoice));
    playerChoiceTxt.textContent = "";
    computerChoiceTxt.textContent = "";
    playerRecordTxt.textContent = 0;
    computerRecordTxt.textContent = 0;
    gamesPlayed = 0;
    wins = 0;
    losses = 0;
    resultsTxt.textContent = "";
}


const weaponButtons = document.querySelectorAll('button.weapon');
const playerRecordTxt = document.querySelector('.record span.player');
const playerChoiceTxt = document.querySelector('.choices span.player');
const computerRecordTxt = document.querySelector('.record span.computer');
const computerChoiceTxt = document.querySelector('.choices span.computer');
const resetButton = document.querySelector('button.reset');
const resultsTxt = document.querySelector('p.results');

resetButton.addEventListener('click', resetGame);

resetGame();


console.error("Rock Paper Scissors");

let wins = 0;
let gamesPlayed = 0;
let cpuWeapon;
let playerWeapon;


function generateCPU() {
    cpuWeapon = Math.ceil(Math.random() * 3);
}

function promptPlayer() {
    const weapon = prompt("Rock, Paper, or Scissors");
    switch (weapon.toLowerCase()) {
        case "rock":
            playerWeapon = 1;
            break;
        case "paper":
            playerWeapon = 2;
            break;
        case "scissors":
            playerWeapon = 3;
            break;
        default:
            alert("Invalid Choice");
            promptPlayer();
    }
}


function checkBattle() {
    let result;

    if (playerWeapon === cpuWeapon){
        result = "Tie";
    }else if(playerWeapon - 1 === cpuWeapon || playerWeapon + 2 === cpuWeapon){
        result = "Win";
        wins++;
    } else{
        result = "Lose"
    }

    displayChoices(result);
    gamesPlayed++;
    gamesPlayed < 5 ? play() : alert(`You won ${wins} out of 5 matches!`);
}
function displayChoices(result) {
    console.log(`Player: ${getWeaponName(playerWeapon)} | CPU: ${getWeaponName(cpuWeapon)} || ${result}`)
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

function play() {
    generateCPU();
    promptPlayer();
    checkBattle();
}

play();
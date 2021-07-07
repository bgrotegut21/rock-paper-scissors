let computerScore = document.body.querySelector("#computer-score")
let userScore = document.body.querySelector("#user-score");
let body = document.querySelector("body");
let computerResults = document.body.querySelector("#computer-results");
let userResults = document.body.querySelector("#user-results");

let computerResultImage = document.body.querySelector("#computer-results-img");
let userResultImage = document.body.querySelector("#user-results-img");

let rock = document.body.querySelector("#rock");
let paper = document.body.querySelector("#paper")
let sissors = document.body.querySelector("#scissors");

let main = document.body.querySelector("main");
let win = document.body.querySelector("#win");
let lost = document.body.querySelector("#lost")

let winButton = document.body.querySelector(".win-button")
let lostButton = document.body.querySelector(".lost-button")

let weapon;
let round = 0;
let comparing = false;
let humanPoints = 0;
let computerPoints = 0;

rock.addEventListener("click", () => {
    if (!comparing){
        comparing = false;
        weapon = 0;
        compareWeapons(weapon);
    }
})

paper.addEventListener("click",() => {
    if (!comparing){
        comparing = false;
        weapon = 1;
        compareWeapons(weapon);
    }
});

sissors.addEventListener("click", () =>{
    if (!comparing){
        comparing = false;
        weapon = 2;
        compareWeapons(weapon);
    }
});
lostButton.addEventListener("click", () => {
    lost.style.display = "none";
    main.style.display = "block";
    body.style.background = "rgb(2, 55, 214)";
})

winButton.addEventListener("click", () => {
    win.style.display = "none";
    main.style.display = "block";
    body.style.background = "rgb(2, 55, 214)";
})


function changeResults(weapon,type){
    let weaponText;
    if(weapon == 0) weaponText = "rocks";
    if(weapon == 1) weaponText = "paper";
    if(weapon == 2) weaponText = "scissors"
    if(type == "human"){
        userResults.textContent = `You choose ${weaponText}`;
        userResultImage.style.background = `url(${weaponText}.svg)`
        userResultImage.style.backgroundRepeat = "no-repeat";
        userResultImage.style.backgroundSize = "80px"
        userResultImage.style.backgroundColor = "rgb(37, 96, 234)"
        userResultImage.style.backgroundPosition = "center";
    } else {
        computerResults.textContent = `Computer chooses  ${weaponText}`
        computerResultImage.style.background = `url(${weaponText}.svg)`
        computerResultImage.style.backgroundRepeat = "no-repeat";
        computerResultImage.style.backgroundSize = "80px"
        computerResultImage.style.backgroundColor = "rgb(37, 96, 234)"
        computerResultImage.style.backgroundPosition = "center";
    }
}

//0 is rock
//1 is paper
//2 is scissors
function compareWeapons(weapon){
    let computerWeapon = Math.floor(Math.random() * 3);
    changeResults(weapon,"human")
    changeResults(computerWeapon)
    if (weapon == 0 && computerWeapon == 1) changePoints("computer");
    if(weapon == 0 && computerWeapon == 2) changePoints("human");
    if(weapon == 1 && computerWeapon == 0) changePoints("human");
    if(weapon == 1 && computerWeapon == 2) changePoints("computer");
    if(weapon == 2 && computerWeapon == 1)changePoints("human");
    if(weapon == 2 &&  computerWeapon == 0) changePoints("computer");

    if(humanPoints ==5|| computerPoints == 5){
        endGame()
    }
}

function endGame(){
    if (humanPoints > computerPoints){
        ressetGame();
    
        main.style.display = "none";
        body.style.background = "rgb(2, 112, 82)";
        win.style.display = "block";
    } else {
        ressetGame();
        body.style.background = "rgb(189, 38, 38)"
        main.style.display = "none";
        lost.style.display = "block"; 
    }
}

function ressetGame(){
    userScore.textContent = "Your Score - 0"
    computerScore.innerHTML = "Computer Score - 0&nbsp&nbsp&nbsp&nbsp&nbsp"
    humanPoints = 0;
    computerPoints =0;
    userResults.textContent = "You choose nothing";
    computerResults.textContent = "Computer chooses nothing"
    userResultImage.style.backgroundPosition = "-9999999px -9999999px";
    computerResultImage.style.backgroundPosition = "-99999999px -99999999px"
    round = 0;
}

function changePoints(type){
    if (type =="human"){
        humanPoints += 1;
        userScore.textContent = `Your Score - ${humanPoints}`
    } else  {
        computerPoints += 1
        computerScore.innerHTML = `Computer Score - ${computerPoints}&nbsp&nbsp&nbsp&nbsp&nbsp`
    }
}


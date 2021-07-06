let computerScore = document.body.querySelector("#computer-score");
let userScore = document.body.querySelector("#user-score");

let computerResults = document.body.querySelector("#computer-results");
let userResults = document.body.querySelector("#user-results");

let computerResultImage = document.body.querySelector("#computer-results-img");
let userResultImage = document.body.querySelector("#user-results-img");

let rock = document.body.querySelector("#rock");
let paper = document.body.querySelector("#paper")
let sissors = document.body.querySelector("#scissors");

let main = document.body.querySelector("main");
let win = document.body.querySelector("win");
let lost = document.body.querySelector("lost")

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
})

sissors.addEventListener("click", () =>{
    if (!comparing){
        comparing = false;
        weapon = 2;
        compareWeapons(weapon);
    }
})

function changeResults(weapon,type){
    let weaponText;
    if(weapon == 0) weaponText = "rocks";
    if(weapon == 1) weaponText = "paper";
    if(weapon == 2) weaponText = "scissors"


    if(type == "human"){
        userResults.textContent = `You chose ${weaponText}`;

        userResultImage.style.background = `url(${weaponText}.svg)`
    } else {
        computerResults.textContent = `Computer chose ${weaponText}`
        computerResultImage.style.background = `url(${weaponText})`
    }
    
}

function compareWeapons(weapon){
    let computerWeapon = Math.floor(Math.random() * 3);
    console.log(computerWeapon, "computer weapon")
    changeResults(weapon,"human")
    changeResults(computerWeapon)
    if (weapon == 0 && computerWeapon == 1) changePoints();
    if(weapon == 0 && computerWeapon == 2) changePoints("human");
    if(weapon == 1 && computerWeapon == 0) changePoints("human");
    if(weapon == 1 && computerWeapon == 2) changePoints();
    if(weapon == 2 && computerWeapon == 1)changePoints("human");
    if(weapon == 2 &&  computerWeapon == 0) changePoints();
    round +=1;
}

function changePoints(type){
    if (type = "human"){
        humanPoints += 1;
        userScore.textContent = `Your Score - ${humanPoints}`

    } else {
        computerPoints += 1
        computerScore.textContent = `Computer Score - ${computerPoints} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`
    }
}


let homePoints = 0;
let guestPoints = 0;
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let restart = homePoints + guestPoints;

function hIncrement1() {
    homePoints += 1;
    homeScore.textContent = homePoints;
}

function hIncrement2() {
    homePoints += 2;
    homeScore.textContent = homePoints;
}

function hIncrement3() {
    homePoints += 3;
    homeScore.textContent = homePoints;
}

function gIncrement1() {
    guestPoints += 1;
    guestScore.textContent = guestPoints;
}

function gIncrement2() {
    guestPoints += 2;
    guestScore.textContent = guestPoints;
}

function gIncrement3() {
    guestPoints += 3;
    guestScore.textContent = guestPoints;
}

function newGame() {
    homePoints *= 0;
    homeScore.textContent = homePoints;
    guestPoints *= 0;
    guestScore.textContent = guestPoints;
}
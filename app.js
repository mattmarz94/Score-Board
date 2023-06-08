let homePoints = 0;
let guestPoints = 0;
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function hIncrement1() {
    homePoints = homePoints + 1;
    homeScore.textContent = homePoints;
}

function hIncrement2() {
    homePoints = homePoints + 2;
    homeScore.textContent = homePoints;
}

function hIncrement3() {
    homePoints = homePoints + 3;
    homeScore.textContent = homePoints;
}

function gIncrement1() {
    guestPoints = guestPoints + 1;
    guestScore.textContent = guestPoints;
}

function gIncrement2() {
    guestPoints = guestPoints + 2;
    guestScore.textContent = guestPoints;
}

function gIncrement3() {
    guestPoints = guestPoints + 3;
    guestScore.textContent = guestPoints;
}

let homeScore = 0
let guestScore = 0

document.getElementById("home-el").textContent = homeScore;
document.getElementById("guest-el").textContent = guestScore;

let sumHome = document.getElementById("home-el")
let sumGuest = document.getElementById("guest-el")



function add1Home(){
    homeScore += 1
    sumHome.textContent = homeScore
}

function add2Home(){
    homeScore += 2
    sumHome.textContent = homeScore
}
function add3Home(){
    homeScore += 3
    sumHome.textContent = homeScore
}

function add1Guest(){
    guestScore += 1
    sumGuest.textContent = guestScore
}

function add2Guest(){
    guestScore += 2
    sumGuest.textContent = guestScore
}
function add3Guest(){
    guestScore += 3
    sumGuest.textContent = guestScore
}

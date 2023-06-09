console.log('Main.js loaded');

//Variables
let playerTotal = 0;
let clickMultiplier = 1;
//End

function buttonClick(){
    playerTotal += clickMultiplier;
    playerTotal *= 100;
    playerTotal = Math.round(playerTotal);
    playerTotal /= 100;
    document.getElementById("totalSpace").innerHTML = '$' + playerTotal;
};

function addMultiplier(mult, price){
    clickMultiplier += mult;
    clickMultiplier *= 100;
    clickMultiplier = Math.round(clickMultiplier);
    clickMultiplier /= 100;
    document.getElementById("multDisplay").innerHTML = 'Click Multiplier: ' + clickMultiplier;
};
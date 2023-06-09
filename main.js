console.log('Main.js loaded');

let playerTotal = 0;
let clickMultiplier1 = 1;

if(window.localStorage.getItem("currentKey")){
    playerTotal = window.localStorage.getItem("currentKey");
}

if(window.localStorage.getItem("butt1Val")){
    clickMultiplier1 = window.localStorage.getItem("butt1Val");
}

//Variables
var clickMultiplier = 1;
console.log(clickMultiplier + "   " + clickMultiplier1);

//End

function buttonClick(){
    playerTotal += clickMultiplier;
    playerTotal *= 100;
    playerTotal = Math.round(playerTotal);
    playerTotal /= 100;
    document.getElementById("totalSpace").innerHTML = '$' + playerTotal;
    window.localStorage.setItem("currentKey", playerTotal);
};

function addMultiplier(mult, price){
    clickMultiplier1 += mult;
    clickMultiplier1 *= 100;
    clickMultiplier1 = Math.round(clickMultiplier1);
    clickMultiplier1 /= 100;
    clickMultiplier += clickMultiplier1;
    document.getElementById("multDisplay").innerHTML = 'Click Multiplier: ' + clickMultiplier;
    window.localStorage.setItem("butt1Val", clickMultiplier1);
};
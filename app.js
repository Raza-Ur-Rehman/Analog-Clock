let numberHours = document.getElementById('#number-hours');
let barSeconds = document.getElementById('#bar-seconds');

let handHours = document.getElementById('#hand1');
let handMinutes = document.getElementById('.hand2');
let handSeconds = document.getElementById('.hand3');
let numberElement = [];
let barElement = [];

for (let i = 1; i<=12; i++) {
        numberHours.innerHTML = `<span style="--i:${i};"><b>${i}</b></span>`
}







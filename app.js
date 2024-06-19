// let numberHours = document.getElementById('#number-hours');
// let barSeconds = document.getElementById('#bar-seconds');

// let handHours = document.getElementById('#hand1');
// let handMinutes = document.getElementById('#hand2');
// let handSeconds = document.getElementById('#hand3');
// let numberElement = [];
// let barElement = [];

// for (let i = 1; i<=12; i++) {
//         numberHours.innerHTML = `<span style="--i:${i};"><b>${i}</b></span>`;
// }
// for (let i = 1; i<=60; i++) {
//         barSeconds.innerHTML = `<span style="--i:${i};"><b>${i}</b></span>`;
// }



let numberHours = document.querySelector('.number-hours');
let barSeconds = document.querySelector('.bar-seconds');

let handHours = document.querySelector('.hand.hours');
let handMinutes = document.querySelector('.hand.minutes');
let handSeconds = document.querySelector('.hand.seconds');

let numberElement = [];
let barElement = [];


    for (let i = 1; i<=12; i++) {
        numberElement.push(
            `<span style="--index:${i};"><p>${i}</p></span>`
        );
    }
    numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

    for (let i = 1; i<=60; i++) {
        barElement.push(
            `<span style="--index:${i};"><p></p></span>`
        );
    }
    barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));

    function getCurrentTime() {
        let date = new Date();

        let currentHours = date.getHours();
        let currentMinutes = date.getMinutes();
        let currentSeconds = date.getSeconds();

        handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;
        handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
        handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
    }

    getCurrentTime();
    setInterval(getCurrentTime, 1000); 



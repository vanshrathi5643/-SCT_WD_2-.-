let startTime;
let elapsedTime = 0;
let timerInterval;
let running = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function formatTime(ms){

    let milliseconds = ms % 1000;

    let seconds = Math.floor(ms / 1000) % 60;

    let minutes = Math.floor(ms / (1000 * 60)) % 60;

    let hours = Math.floor(ms / (1000 * 60 * 60));

    return (
        String(hours).padStart(2,"0") + ":" +
        String(minutes).padStart(2,"0") + ":" +
        String(seconds).padStart(2,"0") + ":" +
        String(milliseconds).padStart(3,"0")
    );
}

function updateDisplay(){
    display.textContent = formatTime(elapsedTime);
}

document.getElementById("start").addEventListener("click", () => {

    if(!running){

        running = true;

        startTime = Date.now() - elapsedTime;

        timerInterval = setInterval(() => {

            elapsedTime = Date.now() - startTime;

            updateDisplay();

        },10);
    }
});

document.getElementById("pause").addEventListener("click", () => {

    running = false;

    clearInterval(timerInterval);

});

document.getElementById("reset").addEventListener("click", () => {

    running = false;

    clearInterval(timerInterval);

    elapsedTime = 0;

    updateDisplay();

    laps.innerHTML = "";

});

document.getElementById("lap").addEventListener("click", () => {

    if(elapsedTime > 0){

        const li = document.createElement("li");

        li.textContent = formatTime(elapsedTime);

        laps.appendChild(li);
    }

});

updateDisplay();
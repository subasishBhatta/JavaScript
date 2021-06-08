console.log("This is my alarm clock app");

// function getTime() {
// let currentTime = new Date();

// let currentHour = currentTime.getHours();
// let currentMinutes = currentTime.getMinutes();
// let currentSeconds = currentTime.getSeconds();

// let timeOfDay = (currentHour < 12) ? "AM" : "PM";

// // Padding 0 to the single digits
// currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds; 
// currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes; 
// currentHour = (currentHour < 10 ? "0" : "") + currentHour; 

// currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
// currentHour = (currentHour == 0) ? 12 : currentHour;

// // Preparing the time string
// let currentTimeStr = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

// let jumbTime = document.getElementById("jumbTime");
// jumbTime.innerHTML = `Current time is: ${currentTimeStr}`;

// }

let currentTime;

let currentHour;
let currentMinutes;
let currentSeconds;

let timeOfDay;
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(() => {
    currentTime = new Date();

    currentHour = currentTime.getHours();
    currentMinutes = currentTime.getMinutes();
    currentSeconds = currentTime.getSeconds();

    timeOfDay = (currentHour < 12) ? "AM" : "PM";

    // Padding 0 to the single digits
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentHour = (currentHour < 10 ? "0" : "") + currentHour;

    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour == 0) ? 12 : currentHour;

    // Preparing the time string
    let currentTimeStr = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

    // Preparing date
    let currentDatestr = currentTime.toLocaleDateString(undefined, options);

    let jumbTime = document.getElementById("jumbTime");
    jumbTime.innerHTML = `Current time is: ${currentTimeStr} on ${currentDatestr}`;
}, 1000);



// Code for ALARM--------------



let audios = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');

let alarmId = document.getElementById("alarmId");
let sound = document.getElementById("sound");
let stop = document.getElementById("stop").addEventListener("click", (e) => {
    e.preventDefault();
    window.document.location.reload();
})

let alerts = document.getElementById("alert");

sound.addEventListener("click", setAlarm);

function setAlarm(e) {
    e.preventDefault();

    let alarmDate = new Date(alarmId.value);
    let time_now = new Date();

    let timeToAlarm = alarmDate - time_now;
    console.log(timeToAlarm);
    alarmId.value = "";

    if (timeToAlarm > 0) {
        setTimeout(() => {
            console.log("Ringing now...");
            setInterval(() => {
                audios.play();
            }, 1000);
        }, timeToAlarm);
    }

    let str = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> Your alarm has been set for ${alarmDate}.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
    alerts.innerHTML = str;
    setTimeout(() => {
        alerts.innerHTML = "";
    }, 5000);
}



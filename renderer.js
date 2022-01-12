// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// const { Notification } = require('electron');

let timeRemaining = 0;
let startHeight = 200;
let drinkTime = 3600;

// set timeRemaining to one hour
function setTime() {
    // set timeRemaining to one hour

    timeRemaining = drinkTime;
    document.getElementById("timer").innerHTML = formatTime(timeRemaining);
    document.getElementById("fillAmount").setAttribute("y", "0");
}

setTime();
countDown();

// count down timer every second
function countDown() {
    if (timeRemaining > 0) {
        timeRemaining--;
        let h = startHeight - remap(timeRemaining, 0, drinkTime, 0, 200);
        document.getElementById("fillAmount").setAttribute("y", h);
        document.getElementById("timer").innerHTML = formatTime(timeRemaining);
        setTimeout(countDown, 1000);
    } else {
        document.getElementById("timer").innerHTML = "SIP SIP BITCH!";
        document.getElementById("fillAmount").setAttribute("y", "100%");
        var messages = [
            "Chug chug chug!",
            "Drink up!",
            "Hope you're thirsty!",
            "You're not drinking enough!",
            "Yummy yummy water!",
        ];
        showNotification("Time to drink!", messages[Math.floor(Math.random() * messages.length)]);
    }
}

function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
}


document.getElementById("reset").addEventListener("click", reset);

function reset() {
    // clear timeout countdown
    clearTimeout(countDown);
    setTime();
    countDown();
}

function showNotification(NOTIFICATION_TITLE, NOTIFICATION_MESSAGE) {
    new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_MESSAGE, icon: "./images/logo-128.png" }).show()
        .onclick = () => {
            reset();
            // focus window
            const { BrowserWindow } = require('electron').remote;
            const win = BrowserWindow.getFocusedWindow();
            win.focus();
            // reset timer
        }
}

function remap(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
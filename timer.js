// let timeRemaining = 0;
// let startHeight = 200;
// let drinkTime = 10;

// // set timeRemaining to one hour
// function setTime() {
//     // set timeRemaining to one hour

//     timeRemaining = drinkTime;
//     document.getElementById("timer").innerHTML = formatTime(timeRemaining);
//     document.getElementById("fillAmount").setAttribute("y", "0");
// }

// setTime();
// countDown();

// // count down timer every second
// function countDown() {
//     if (timeRemaining > 0) {
//         timeRemaining--;
//         let h = startHeight - remap(timeRemaining, 0, drinkTime, 0, 200);
//         document.getElementById("fillAmount").setAttribute("y", h);
//         document.getElementById("timer").innerHTML = formatTime(timeRemaining);
//         setTimeout(countDown, 1000);
//     } else {
//         document.getElementById("timer").innerHTML = "SIP SIP BITCH!";
//         document.getElementById("fillAmount").setAttribute("y", "100%");
//     }
// }

// function formatTime(time) {
//     let minutes = Math.floor(time / 60);
//     let seconds = time % 60;
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//     return minutes + ":" + seconds;
// }


// document.getElementById("reset").addEventListener("click", reset);

// function reset() {
//     setTime();
//     countDown();

// }

// function remap(value, low1, high1, low2, high2) {
//     return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
// }
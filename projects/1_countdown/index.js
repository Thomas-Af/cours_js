let finalDate = new Date('2021-12-25T00:00:00').getTime();
// let finalDate = new Date('2021-11-06T19:50:00').getTime();


let countdown = setInterval(function() {
    
    let today = new Date().getTime();
    let timeLeft = finalDate - today;

    let milliSeconds = Math.floor((timeLeft % 1000) / 10);
    document.getElementById("millis").innerHTML = milliSeconds;
    if (milliSeconds <= 0) {
        document.getElementById("millis").innerHTML = "0";
    }

    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById("seconds").innerHTML = seconds;
    if (seconds <= 0) {
        document.getElementById("seconds").innerHTML = "0";
    }

    let minutes = Math.floor((timeLeft % (1000 * 3600)) / (1000 * 60));
    document.getElementById("minutes").innerHTML = minutes;
    if (minutes <= 0) {
        document.getElementById("minutes").innerHTML = "0";
    }

    let hours = Math.floor((timeLeft % (1000 * 3600 * 24)) / (1000 * 3600));
    document.getElementById("hours").innerHTML = hours;
    if (hours <= 0) {
        document.getElementById("hours").innerHTML = "0";
    }

    let days = Math.floor(timeLeft / (1000 * 3600 * 24));
    document.getElementById("days").innerHTML = days;
    if (days <= 0) {
        document.getElementById("days").innerHTML = "0";
    }

    if (timeLeft <= 0) {
        const countdown = document.querySelector(".displayed");
        countdown.classList.remove('displayed');

        const christmas = document.createElement("div");
        document.body.append(christmas);
        christmas.classList.add('christmas');
        christmas.textContent = "Joyeux Noël ! ";
    }
}, 1);


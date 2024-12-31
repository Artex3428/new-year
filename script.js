let countdownStarted = false; // Flag to ensure countdown only starts once
document.getElementById('bgmusic').pause();

function updateTime() {
    const now = new Date();

    const hours = now.getHours(); // Gets the hour (0-23)
    const minutes = now.getMinutes(); // Gets the minutes (0-59)
    const seconds = now.getSeconds(); // Gets the seconds (0-59)

    // Format time with leading zero if needed
    document.getElementById("time").innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Check if it's 23:59:00
    if (hours === 23 && minutes === 59 && seconds === 0 && !countdownStarted) {
        countdownStarted = true; // Set flag to prevent restarting countdown

        let remainingTime = 60; // Countdown starts from 1 minute (60 seconds)

        document.getElementById("time").style = "display:none;";
        const timerElement = document.getElementById("time2");

        const intervalId = setInterval(() => {
            // Calculate minutes and seconds
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;

            // Format time with leading zero if needed
            const formattedTime = `${String(seconds).padStart(2, '0')}`;
            timerElement.innerHTML = formattedTime;

            // Check if time has run out
            if (remainingTime <= 0) {
                clearInterval(intervalId); // Stop the timer
                document.getElementById('bgmusic').play();
                timerElement.style = "display: none;"; // Display message
                document.getElementById("title").innerHTML = "Gott nytt år!";
                document.getElementById("fireworks-container").style.display = "block"; // Show fireworks
            }

            remainingTime--; // Decrease time by 1 second
        }, 1000);
    }
}

// Update time every second
setInterval(updateTime, 1000);
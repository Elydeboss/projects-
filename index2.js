function updateTimeAndDay() {
    const utcTimeElement = document.getElementById('utc-time');
    const currentDayElement = document.getElementById('current-day');

    const now = new Date();
    utcTimeElement.textContent = now.toUTCString().split(' ')[4];

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    currentDayElement.textContent = days[now.getUTCDay()];
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();
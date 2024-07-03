function updateTime() {
    const now = new Date();
    const options = { weekday: 'long' };
    const dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(now);
    const utcString = now.toUTCString().split(' ')[4];

    document.getElementById('currentDay').textContent = `Current Day Of The Week: ${dayOfWeek}`;
    document.getElementById('currentTimeUTC').textContent = `Current Time in UTC: ${utcString}`;
}

setInterval(updateTime, 1000); // Update time every second

document.addEventListener('DOMContentLoaded', (event) => {
    updateTime(); // Initial call to set the time immediately on page load
});

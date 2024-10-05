
// All messages are reloaded in "setInterval" every second (not just the time) so when a day passes it will be updated live

const displayDate = document.getElementById('date');
const displayTime = document.getElementById('clock');
const tillNextYear = document.getElementById('next-year');

setInterval(() => {
    const fullDate = new Date();

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const months =
        ["January", "February", "March", "April", "May", "June", "July",
         "August", "September", "October", "November", "December"];
    displayDate.innerHTML = `Today is&nbsp;${days[fullDate.getDate()]}, ${months[fullDate.getMonth()]} ${fullDate.getDate()}.`;

    let hours = fullDate.getHours();
    let min = fullDate.getMinutes();
    let sec = fullDate.getSeconds();
    if (sec < 10)
        sec = '0' + `${fullDate.getSeconds()}`;
    if (min < 10)
        min = '0' + `${fullDate.getMinutes()}`;
    if (hours < 10)
        hours = '0' + `${fullDate.getHours()}`;
    displayTime.innerHTML = `The current time:&nbsp;&nbsp;<div id="time">${hours}:${min}:${sec}</div>`;

    const nextYear = fullDate.getFullYear() + 1;
    const nextYearDate = new Date(nextYear, 0, 1);
    const daysRemaining = Math.ceil((nextYearDate - fullDate) / (1000 * 60 * 60 * 24));
    tillNextYear.innerHTML = `There are ${daysRemaining} days left until ${nextYear}`;

}, 1000);

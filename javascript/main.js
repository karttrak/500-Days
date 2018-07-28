const MILLIS_PER_SECOND = 1000;
const SECONDS_PER_DAY = 86400;
const START_DATE = new Date("June 28, 2018 09:00:00");

let today = new Date();

let days = (today - START_DATE) / MILLIS_PER_SECOND / SECONDS_PER_DAY;

let count = Math.ceil(days);

document.querySelector('.count').innerHTML = count;

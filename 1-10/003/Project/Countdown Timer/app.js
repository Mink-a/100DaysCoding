const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2022, 5, 3, 17, 30, 0);

const year = futureDate.getFullYear();
const month = futureDate.getMonth();

const day = futureDate.getDay();
const date = futureDate.getDate();
const hour = futureDate.getHours();
const min = futureDate.getMinutes();
giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${date} ${months[month]} ${year} ${hour}:${min} pm`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let leftDay = Math.floor(t / oneDay);
  let leftHour = Math.floor((t % oneDay) / oneHour);
  let leftMin = Math.floor((t % oneHour) / oneMinute);
  let leftSec = Math.floor((t % oneMinute) / 1000);

  const values = [leftDay, leftHour, leftMin, leftSec];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

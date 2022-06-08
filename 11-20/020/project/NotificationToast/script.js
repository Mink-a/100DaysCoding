const btn = document.querySelector(".btn");
const toast = document.querySelector(".toast");

const messages = [
  "message one",
  "message two",
  "message three",
  "message four",
];

const alertType = ["success", "info", "danger", "happy"];

btn.addEventListener("click", () => {
  showNotification();
});

function showNotification() {
  let message = getRandomMessage();
  let alert = getRandomAlertType();
  const noti = document.createElement("div");
  noti.classList.add("message", alert);
  noti.textContent = message;

  toast.appendChild(noti);

  setTimeout(() => {
    noti.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomAlertType() {
  return alertType[Math.floor(Math.random() * alertType.length)];
}

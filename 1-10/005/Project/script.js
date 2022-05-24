const imgs = document.querySelectorAll("img");
let img = 1;

function next() {
  document.querySelector(`#img${img}`).style.display = "none";
  img++;
  if (img > imgs.length) img = 1;
  document.querySelector(`#img${img}`).style.display = "block";
}

function prev() {
  document.querySelector(`#img${img}`).style.display = "none";
  img--;
  if (img < 1) img = imgs.length;
  document.querySelector(`#img${img}`).style.display = "block";
}

document.querySelector("#next").addEventListener("click", next);
document.querySelector("#prev").addEventListener("click", prev);

setInterval(next, 3000);

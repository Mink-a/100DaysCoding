const btn = document.querySelector(".btn");
const bg = document.querySelector(".bg");
const color = document.querySelector(".color");

const colors = [
  "AliceBlue",
  "Beige",
  "Chocolate",
  "Crimson",
  "DarkGreen",
  "DarkSlateBlue",
  "DarkOrchid",
  "DarkViolet",
  "Teal",
  "Tomato",
  "SeaShell",
  "Chartreuse",
  "DarkCyan",
];

btn.addEventListener("click", () => {
  let index = getRandom();
  color.innerText = colors[index];
  bg.style.backgroundColor = colors[index];
});

function getRandom() {
  return Math.floor(Math.random() * colors.length);
}

import "./index.css";

const left = document.querySelector('[data-id="leftPage"]');
const right = document.querySelector('[data-id="rightPage"]');

left.addEventListener("mouseenter", () => {
  left.classList.remove("w-1/2");
  right.classList.remove("w-1/2");
  left.classList.add("w-3/4");
  right.classList.add("w-1/4");
});
left.addEventListener("mouseleave", () => {
  left.classList.remove("w-3/4");
  right.classList.remove("w-1/4");
  left.classList.add("w-1/2");
  right.classList.add("w-1/2");
});

right.addEventListener("mouseenter", () => {
  left.classList.remove("w-1/2");
  right.classList.remove("w-1/2");
  right.classList.add("w-3/4");
  left.classList.add("w-1/4");
});

right.addEventListener("mouseleave", () => {
  right.classList.remove("w-3/4");
  left.classList.remove("w-1/4");
  right.classList.add("w-1/2");
  left.classList.add("w-1/2");
});

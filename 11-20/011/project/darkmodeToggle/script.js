const inputElement = document.querySelector(".input");
const body = document.querySelector("body");

inputElement.checked = JSON.parse(localStorage.getItem("mode"));
updateBackground();

inputElement.addEventListener("input", () => {
  updateBackground();
  updateLocalStorage();
});

function updateBackground() {
  if (inputElement.checked) {
    body.style.backgroundColor = "black";
  } else {
    body.style.backgroundColor = "white";
  }
}

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputElement.checked));
}

const input = document.querySelector(".inputs input");
const btn = document.querySelector(".inputs button");
const infoTxt = document.querySelector(".info-txt");

let filterInput;

btn.addEventListener("click", () => {
  let reverseInput = filterInput.split("").reverse().join("");
  infoTxt.style.display = "block";
  if (filterInput === reverseInput) {
    infoTxt.innerHTML = `Yes, <span>"${input.value}"</span> is a palindrome.`;
  } else {
    infoTxt.innerHTML = `No, <span>"${input.value}"</span> is not a palindrome.`;
  }
});

input.addEventListener("keyup", () => {
  filterInput = input.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  if (filterInput) {
    return btn.classList.add("active");
  }
  btn.classList.remove("active");
  infoTxt.style.display = "none";
});

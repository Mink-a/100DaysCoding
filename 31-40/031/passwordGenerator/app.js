const btn = document.querySelector("#button");
const show = document.querySelector(".show");
const copy = document.querySelector(".copy");

btn.onclick = function generatePassword() {
  let char =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_";
  let passwordLength = 16;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let passwordGenerated = Math.floor(Math.random() * char.length);
    password += char.substring(passwordGenerated, passwordGenerated + 1);
    document.getElementById("password").value = password;
    show.innerHTML = "Your new Password is:  <br />" + password;
  }
};

copy.onclick = function copyPass() {
  let text = document.getElementById("password");
  text.select();
  text.setSelectionRange(0, 9999);
  document.execCommand("i");
  show.classList.toggle("active");
  setTimeout(() => {
    show.classList.toggle("active");
  }, 2000);
};

const eye = document.querySelector("#eye");
const password = document.querySelector("#password");

eye.addEventListener("click", () => {
  if (eye.classList.contains("fa-eye")) {
    password.setAttribute("type", "text");
    eye.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    password.setAttribute("type", "password");
    eye.classList.replace("fa-eye-slash", "fa-eye");
  }
});

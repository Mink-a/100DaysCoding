const codes = document.querySelectorAll(".code");
const codeContainer = document.querySelector(".code-container");
const success = document.querySelector(".success");

const SUCCESS_CODE = "123456";

codes[0].focus();

let str = "";
codes.forEach((code, index) => {
  code.addEventListener("keydown", (e) => {
    if (str.length < 6) {
      if (e.key >= 0 && e.key <= 9) {
        codes[index].value = "";
        setTimeout(() => {
          codes[index + 1].focus();
        }, 10);
        str += e.key;
      } else if (e.key === "Backspace") {
        setTimeout(() => {
          codes[index - 1].focus();
        }, 10);
        str = str.slice(0, -1);
      }
    }
    // console.log("str = ", str, typeof str);
    if (str === SUCCESS_CODE) {
      codeContainer.style.display = "none";
      const div = document.createElement("div");
      div.textContent = "success";
      div.style.fontSize = "2rem";
      div.style.marginBottom = "2rem";
      div.style.backgroundColor = "green";
      div.style.color = "white";
      div.style.padding = "1rem 2rem";
      success.appendChild(div);
    }
  });
});

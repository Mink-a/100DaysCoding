const ripple = document.querySelectorAll(".ripple");

ripple.forEach((button) => {
  button.addEventListener("click", function (e) {
    let x = e.clientX;
    let y = e.clientY;

    let buttonTop = e.target.offsetTop;
    let buttonLeft = e.target.offsetLeft;

    let insideX = x - buttonLeft;
    let insideY = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = insideY + "px";
    circle.style.left = insideX + "px";

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 3000);
  });
});

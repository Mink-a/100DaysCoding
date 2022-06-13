const slider = document.querySelector(".slider input");
const img = document.querySelector(".images .img-2");
const dragLine = document.querySelector(".slider .drag-line");

slider.oninput = () => {
  let sliderValue = slider.value;
  dragLine.style.left = sliderValue + "%";
  img.style.width = sliderValue + "%";
};

const btn = document.querySelector(".btn");
const imgContainer = document.querySelector(".img-container");

btn.addEventListener("click", () => {
  for (let i = 0; i < 10; i++) {
    addNewImg();
  }
});

function addNewImg() {
  const img = document.createElement("img");
  img.src = `//picsum.photos/300?random${Math.floor(Math.random() * 2000)}`;
  imgContainer.appendChild(img);
}

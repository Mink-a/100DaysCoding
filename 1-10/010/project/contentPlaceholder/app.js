const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 3000);

function getData() {
  header.querySelector("img").style.display = "block";
  title.innerHTML = "Places to go on vacation";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos itaque eligendi deleniti sunt quibusdam magnam quam. Consequuntur.";
  profile_img.innerHTML = `<img src="//picsum.photos/id/555/100" alt="profile img" />`;
  name.innerHTML = "Mink";
  date.innerHTML = "May 29, 2022";

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animated_bg_texts.forEach((bg) => {
    bg.classList.remove("animated-bg-text");
  });
}

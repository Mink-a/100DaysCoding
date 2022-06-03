// Text to speech project, it doesn't go well, I will fixed later.

let synth = window.speechSynthesis;
let isSpeaking = true;
const textarea = document.querySelector("textarea"),
  speechBtn = document.querySelector("button"),
  voiceList = document.querySelector("select");

voices();

function voices() {
  for (let voice of synth.getVoices()) {
    let selected = voice.name === "Burmese" ? "selected" : "";
    let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;

    voiceList.insertAdjacentHTML("beforeend", option);
  }
}
synth.addEventListener("voiceschanged", voices());

function textToSpeech(text) {
  let utter = new SpeechSynthesisUtterance(text);
  for (let voice of synth.getVoices()) {
    if (voice.name === voiceList.value) {
      utter.voice = voice;
    }
  }
  synth.speak(utter);
}

speechBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (textarea.value !== "") {
    if (!synth.speaking) {
      textToSpeech(textarea.value);
    }
    if (textarea.value.length > 80) {
      if (isSpeaking) {
        synth.resume();
        isSpeaking = false;
        speechBtn.innerText = "Pause Speech";
      } else {
        synth.pause();
        isSpeaking = true;
        speechBtn.innerText = "Resume Speech";
      }
      setInterval(() => {
        if (!synth.speaking && !isSpeaking) {
          isSpeaking = true;
          speechBtn.innerText = "Convert to Speech";
        } else {
          speechBtn.innerText = "Convert to Speech";
        }
      });
    }
  }
});

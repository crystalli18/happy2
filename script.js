let isOpen = false;

function toggleEnvelope() {
  const letter = document.getElementById("letter");
  const envelope = document.getElementById("envelope");

  if (!isOpen) {
    letter.classList.remove("hidden");
    letter.classList.add("visible");
    envelope.style.transform = "rotateX(180deg)";
  } else {
    letter.classList.remove("visible");
    letter.classList.add("hidden");
    envelope.style.transform = "rotateX(0deg)";
  }

  isOpen = !isOpen;
}
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-toggle");

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.muted = false;
    music.play();
    musicBtn.textContent = "⏸ Pause Music";
  } else {
    music.pause();
    musicBtn.textContent = "▶ Play Music";
  }
});

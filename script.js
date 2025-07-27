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
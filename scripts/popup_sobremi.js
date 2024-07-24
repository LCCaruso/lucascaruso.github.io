document.addEventListener("DOMContentLoaded", () => {
  const sobreMiButton = document.querySelector(".link__sobremi");

  // Get the popup container and content
  const popupContainerSobremi = document.getElementById(
    "popup__sobremi__container"
  );
  const popupContentSobremi = document.querySelector(".popup__sobremi");

  // Get the <span> element that closes the popup
  const closeSobreMiButton = document.getElementById("close__sobremi");

  if (sobreMiButton) {
    sobreMiButton.addEventListener("click", () => {
      playSound();
      popupContainerSobremi.style.display = "block";
      setTimeout(() => {
        popupContainerSobremi.classList.add("active");
        popupContentSobremi.classList.add("animate-open");
        startTypingEffect();
        startAnimations();
      }, 0);
    });
  }

  if (closeSobreMiButton) {
    closeSobreMiButton.addEventListener("click", () => {
      closePopupSobremi();
    });
  }

  popupContainerSobremi.addEventListener("click", (event) => {
    if (event.target === popupContainerSobremi) {
      closePopupSobremi();
    }
  });

  function closePopupSobremi() {
    popupContentSobremi.classList.remove("animate-open");
    popupContentSobremi.classList.add("animate-close");
    popupContainerSobremi.classList.remove("active");
    setTimeout(() => {
      popupContainerSobremi.style.display = "none";
      popupContentSobremi.classList.remove("animate-close");
    }, 600); // La duración debe coincidir con la duración de la animación de cierre
  }

  function playSound() {
    const audio = new Audio("./sounds/click-sound.mp3");
    audio.play();
  }

  function startTypingEffect() {
    const div = document.querySelector(".primer__parrafo__sobremi p");
    div.textContent = "";
    const texto =
      "Dedicado y detallista desarrollador web, con una solida comprensión tanto del Front End como del Back End. Diseñador UX/UI enfocado en crear aplicaciones web funcionales y atractivas.";
    efectoTextTyping(div, texto);
  }

  function startAnimations() {
    const gifMario = document.querySelector(".gif__mario");
    const tituloSobreMi = document.querySelector(
      ".primer__parrafo__sobremi h2"
    );
    const gifMarioOk = document.querySelector(".gif__mario__ok");

    gifMario.style.animation = "none";
    tituloSobreMi.style.animation = "none";
    gifMarioOk.style.animation = "none";

    setTimeout(() => {
      gifMario.style.animation = "";
      tituloSobreMi.style.animation = "";
      gifMarioOk.style.animation = "";
      gifMario.style.animation = "izq-der-mario 4.2s forwards";
      tituloSobreMi.style.animation = "izq-der 1s forwards .5s";
      gifMarioOk.style.animation = "aba-arr 0.5s forwards 2.5s";
    }, 0);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const sobreMiButton = document.querySelector(".link__sobremi");
  const proyectosButton = document.querySelector(".link__proyectos");
  const contactoButton = document.querySelector(".link__contacto");
  const closeSobreMiButton = document.getElementById("close__sobremi");
  const closeProyectosButton = document.getElementById("close__proyectos");
  const closeContacto = document.getElementById("close__contacto-4");
  const confirmationMessage = document.getElementById("confirmation-message");
  const elementos = document.querySelectorAll(
    ".elemento__1, .elemento__2, .elemento__3, .elemento__4, .elemento__5"
  );

  if (sobreMiButton) {
    sobreMiButton.addEventListener("click", () => {
      playSound();
    });
  }

  if (proyectosButton) {
    proyectosButton.addEventListener("click", () => {
      playSound();
    });
  }

  if (contactoButton) {
    contactoButton.addEventListener("click", () => {
      playSound3();
    });
  }

  if (closeSobreMiButton) {
    closeSobreMiButton.addEventListener("click", () => {
      playSound2();
    });
  }

  if (closeProyectosButton) {
    closeProyectosButton.addEventListener("click", () => {
      playSound2();
    });
  }

  if (closeContacto) {
    closeContacto.addEventListener("click", () => {
      playSound2();
    });
  }

  if (confirmationMessage && confirmationMessage.ok) {
    playSound4();
  }

  elementos.forEach((elemento) => {
    elemento.addEventListener("mouseenter", handleMouseEnter);
    elemento.addEventListener("mouseleave", handleMouseLeave);
  });

  function handleMouseEnter(event) {
    playSound5();
  }

  function handleMouseLeave(event) {
    // Puedes añadir lógica aquí si necesitas hacer algo cuando el mouse deja el elemento
  }

  function playSound() {
    const audio = new Audio("./sounds/open.mp3"); // Asegúrate de que la ruta al archivo de sonido sea correcta
    audio.play();
  }

  function playSound2() {
    const audio2 = new Audio("./sounds/close.mp3"); // Asegúrate de que la ruta al archivo de sonido sea correcta
    audio2.play();
  }

  function playSound3() {
    const audio3 = new Audio("./sounds/card.mp3"); // Asegúrate de que la ruta al archivo de sonido sea correcta
    audio3.play();
  }

  function playSound4() {
    const audio4 = new Audio("./sounds/sentmessage.mp3"); // Asegúrate de que la ruta al archivo de sonido sea correcta
    audio4.play();
  }

  function playSound5() {
    const audio5 = new Audio("./sounds/mouseover3.mp3"); // Asegúrate de que la ruta al archivo de sonido sea correcta
    audio5.play();
  }
});

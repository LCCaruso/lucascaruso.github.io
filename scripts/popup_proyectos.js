// Function to play sound (moved here to ensure it's available in this script)

// function playSound2() {
//   const audio2 = new Audio("./sounds/coin_c_02-102844.mp3"); // Asegúrate de que la ruta al archivo de sonido sea correcta
//   audio2.play();
// }

// Get the popup container and content
var popupContainerProyectos = document.getElementById(
  "popup__proyectos__container"
);
var popupContentProyectos = document.querySelector(".popup__proyectos");

// Get the element that opens the popup
var elementoProyectos = document.querySelector(".link__proyectos");

// Get the <span> element that closes the popup
var spanProyectos = document.getElementById("close__proyectos");

// When the user clicks on the element, open the popup
elementoProyectos.onclick = function () {
  // playSound();
  // Reproducir el sonido inmediatamente al hacer clic
  popupContainerProyectos.style.display = "block";
  setTimeout(function () {
    popupContentProyectos.classList.add("animate-open");
  }, 0); // Espera 50ms para permitir la visualización de la transición
  console.log("pop up abierto");
};

// When the user clicks on <span> (x), close the popup
spanProyectos.onclick = function () {
  closePopupProyectos();
};

// When the user clicks anywhere outside of the popup, close it
window.onclick = function (event) {
  if (event.target === popupContainerProyectos) {
    closePopupProyectos();
  }
};

function closePopupProyectos() {
  popupContentProyectos.classList.remove("animate-open");
  popupContentProyectos.classList.add("animate-close");
  setTimeout(function () {
    popupContainerProyectos.style.display = "none";
    popupContentProyectos.classList.remove("animate-close");
  }, 300); // La duración debe coincidir con la duración de la animación
}

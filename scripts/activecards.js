//PARA AL ESTAR ACTIVAS LAS CARDS, QUEDEN EN POSICION -5PX 5PX //

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".elemento__1, .elemento__2, .elemento__4, .front-4, .is-flipped, .elemento__5"
  );

  elements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      elements.forEach((el) => el.classList.remove("active"));
      element.classList.add("active");
    });
  });
});

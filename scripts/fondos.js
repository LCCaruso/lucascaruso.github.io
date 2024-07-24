// Seleccionar los elementos
const elemento1 = document.querySelector(".elemento__1");
const elemento2 = document.querySelector(".elemento__2");
const elemento4 = document.querySelector(".elemento__4");

// Event listeners para cada elemento
elemento1.addEventListener("mouseover", () => {
  document.body.classList.add("fondo__1");
  document.body.classList.remove("fondo__2", "fondo__4");
});

elemento2.addEventListener("mouseover", () => {
  document.body.classList.add("fondo__2");
  document.body.classList.remove("fondo__1", "fondo__4");
});

elemento4.addEventListener("mouseover", () => {
  document.body.classList.add("fondo__4");
  document.body.classList.remove("fondo__1", "fondo__2");
});

document.getElementById("contacto-link").addEventListener("click", function () {
  const card = document.querySelector(".card__4");
  card.classList.add("is-flipped");
});

document
  .getElementById("close__contacto-4")
  .addEventListener("click", function () {
    const card = document.querySelector(".card__4");
    card.classList.remove("is-flipped");
  });

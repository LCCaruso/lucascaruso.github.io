document.getElementById("front1").addEventListener("click", function () {
  const card = document.querySelector(".card__1");
  card.classList.add("is-flipped1");
});

document
  .getElementById("close__sobremi-1")
  .addEventListener("click", function () {
    const card = document.querySelector(".card__1");
    card.classList.remove("is-flipped1");
  });

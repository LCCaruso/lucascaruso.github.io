document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío inmediato

    const confirmationMessage = document.getElementById("confirmation-message");

    // Realiza el envío del formulario
    fetch("https://formspree.io/f/mkgwnrrp", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new FormData(this),
    })
      .then((response) => {
        if (response.ok) {
          this.reset();
          //   confirmationMessage.textContent = "Mensaje enviado con éxito!";
          playSound4();
          confirmationMessage.classList.remove("error");
          confirmationMessage.style.display = "block";
        } else {
          return response.json().then((data) => {
            if (data.errors) {
              confirmationMessage.textContent = data.errors
                .map((error) => error.message)
                .join(", ");
            } else {
              confirmationMessage.textContent = "Error al enviar el formulario";
            }
            confirmationMessage.classList.add("error");
            confirmationMessage.style.display = "block";
          });
        }
      })
      .catch((error) => {
        console.error("Error al enviar el formulario:", error);
        confirmationMessage.textContent =
          "Error al enviar el formulario: " + error.message;
        confirmationMessage.classList.add("error");
        confirmationMessage.style.display = "block";
      });
  });

// if (sobreMiButton) {
//   sobreMiButton.addEventListener("click", () => {
//     playSound();
//   });
// }

function playSound4() {
  const audio4 = new Audio("./sounds/woof.mp3");
  // Asegúrate de que la ruta al archivo de sonido sea correcta
  audio4.play();
}

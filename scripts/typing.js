function efectoTextTyping(elemento, texto, i = 0) {
  if (i < texto.length) {
    elemento.textContent += texto[i];
    setTimeout(() => efectoTextTyping(elemento, texto, i + 1), 10);
  }
}

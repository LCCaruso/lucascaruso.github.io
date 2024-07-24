const image = document.querySelector(".img-container img");
const titulo = document.getElementById("titulo");
const artista = document.getElementById("artista");

const progressContainer = document.getElementById("progressBar");
const progress = document.getElementById("progress");

const tiempoActual = document.getElementById("tiempoActual");
const duracion = document.getElementById("tiempoDuracion");

const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const volumeIcon = document.getElementById("volume-icon");
const volumeSlider = document.getElementById("volume-slider");

const marqueeContainer = document.getElementById("marquee-container");

// Playlist

const songs = [
  {
    name: "Hero of the 80s",
    displayName: "Hero of the 80s - Interlude Arcade",
    artista: "Interlude Arcade",
  },
  {
    name: "Seoul Arcade",
    displayName: "Seoul Arcade - Navigator Pirates",
    artista: "Navigator Pirates",
  },
  {
    name: "People river",
    displayName: "People river - Rambo 5 by Alabhama",
    artista: "Rambo 5",
  },
];

// Para verificar si esta reproduciendo musica

let isPlaying = false;

// Funcion Play

function playSong() {
  isPlaying = true;
  playBtn.classList.remove("fa-play");
  playBtn.classList.add("fa-pause");
  music.play();
  startMarquee();
}

// Funcion Pause

function pauseSong() {
  isPlaying = false;
  playBtn.classList.remove("fa-pause");
  playBtn.classList.add("fa-play");
  music.pause();
  resetMarquee();
}

// Funcion para comenzar desplazamiento de marquesina

function startMarquee() {
  titulo.style.transform = "translateX(100%)"; // Colocar fuera de vista
  titulo.style.transition = "none"; // Sin transición para el inicio
  setTimeout(() => {
    titulo.style.transform = "translateX(-150%)";
    titulo.style.animation = "marquee 10s linear infinite";
  }, 5); // Retraso para asegurar el cambio
}

// Funcion para reiniciar desplazamiento de marquesina

function resetMarquee() {
  titulo.style.animation = "none";
  titulo.style.transform = "translateX(0)";
  titulo.style.transition = "transform 1s"; // Transición suave de regreso
}

// Al hacer click en el boton Play qctiva las funciones Play o Pause dependiendo si esta reproduciendo o no

playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

// Funcion leer cancion

function loadSong(song) {
  titulo.textContent = song.displayName;
  artista.textContent = song.artista;
  music.src = `songs/${song.name}.mp3`;
  image.src = `imageSongs/${song.name}.jpg`;
}

// Cancion actual

let songIndex = 0;

// Cancion anterior

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
  resetMarquee();
}

// Siguiente cancion

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
  resetMarquee();
}

// Al cargar las canciones se leera la primera cancion

loadSong(songs[songIndex]);

// Actualizar la barra de progreso y el tiempo de la cancion

function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100; //actualiza la barra de progreso
    progress.style.width = `${progressPercent}%`; //esta linea cambia la propiedad css de progress
    const durationMinutes = Math.floor(duration / 60); //calcula la duracion total en minutos
    let durationSeconds = Math.floor(duration % 60);

    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }

    if (durationSeconds) {
      duracion.textContent = `${durationMinutes} : ${durationSeconds}`;
    }

    const currentMinutes = Math.floor(currentTime / 60); // calcula la duracion total del recorrido de la cancion
    let currentSeconds = Math.floor(currentTime % 60);

    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }

    if (currentSeconds) {
      tiempoActual.textContent = `${currentMinutes} : ${currentSeconds}`;
    }
  }
}

//mostrar la barra de progreso

function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;
  music.currentTime = (clickX / width) * duration;
}

// Obtener el control deslizante de volumen
music.volume = volumeSlider.value;

// Función para cambiar el volumen
function changeVolume(e) {
  music.volume = e.target.value;
  if (music.volume === 0) {
    volumeIcon.classList.remove("fa-volume-high");
    volumeIcon.classList.add("fa-volume-xmark");
    volumeIcon.style.color = "#ba6565"; // Cambia el color del icono cuando el volumen es 0
  } else {
    volumeIcon.classList.remove("fa-volume-xmark");
    volumeIcon.classList.add("fa-volume-high");
    volumeIcon.style.color = ""; // Restablece el color del icono
  }
}

// Variables para controlar el muteo
let isMuted = false;
let previousVolume = music.volume;

// Función para mutear o desmutear el volumen
function toggleMute() {
  if (isMuted) {
    music.volume = previousVolume;
    volumeSlider.value = previousVolume;
    volumeIcon.classList.remove("fa-volume-xmark");
    volumeIcon.classList.add("fa-volume-high");
    volumeIcon.style.color = ""; // Restablece el color del icono
    isMuted = false;
  } else {
    previousVolume = music.volume;
    music.volume = 0;
    volumeSlider.value = 0;
    volumeIcon.classList.remove("fa-volume-high");
    volumeIcon.classList.add("fa-volume-xmark");
    volumeIcon.style.color = "#ba6565"; // Cambia el color del icno cuando esta muteado
    isMuted = true;
  }
}

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("ended", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgressBar);

// Agregar un evento al control deslizante de volumen y al icono de volumen
volumeSlider.addEventListener("input", changeVolume);
volumeIcon.addEventListener("click", toggleMute);

// Reset marquee on page load
resetMarquee();

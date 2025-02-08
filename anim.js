// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Your morning eyes", time: 18-3-10 },
  { text: "I could stare like watching stars", time: 19.5-3-10-2.5},
  { text: "I could walk you be,", time: 23-3-10 },
  { text: "and I'll tell without a thought", time: 27-3-10 },
  { text: "You'd be mine, would you mind", time: 31-3-10 },
  { text: "if I took your hand tonight?", time: 33-3-10-1 },
  { text: "Know you're all that I want this life", time: 38-3-10 },
  { text: "I'll imagine we fell in love", time: 45-3-10 },
  { text: "I'll nap under moonlight skies with you", time: 47-3-10 },
  { text: "I think I'll picture us, you with the waves", time: 51-3-10 },
  { text: "The ocean's colors on your face", time: 54-3-10-1.4 },
  { text: "I'll leave my heart with your air", time: 57-3-10},
  { text: "So let me fly with you", time: 62-3-10},
  { text: "Will you be forever with me", time: 65-3-10-0.5 },
  { text: "My love will always stay by you", time: 99-3-9 },
  { text: "I'll keep it safe, so dont you worry a thing", time: 104-3-10 },
  { text: "I'll tell you I love you more", time: 109-10-2 },
  { text: "It's stuck with you foever", time: 112-10-2 },
  { text: ", so promise you won't let go", time: 115-10-2 },
  { text: "I'll trust the universe will always bring me to you", time: 119-3-10-2 },
  { text: "I'll imagine we fell in love", time: 126-3-10 },
  { text: "I'll nap under moonlight skies with you", time: 128-3-10-1 },
  { text: "I think I'll picture us, you with the waves", time: 132-3-10 },
  { text: "The ocean's colors on your face", time: 135-3-10 },
  { text: "I'll leave my heart with your air", time: 139-3-10 },
  { text: "So let me fly with you", time: 143-3-10 },
  { text: "Will you be forever with me?", time: 146-3-10-0.5 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);